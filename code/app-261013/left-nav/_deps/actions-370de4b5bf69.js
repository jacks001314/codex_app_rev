import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  PA as n,
  Pxt as r,
  bA as i,
  fSt as a,
  frt as o,
  hrt as s,
  jDt as c,
  mA as l,
  oSt as u,
  qA as d,
  xA as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Ln as p,
  BNn as m,
  Bpt as h,
  Dpt as g,
  GIn as _,
  GMr as v,
  JNn as ee,
  KKn as y,
  KNn as te,
  QDr as ne,
  UKn as re,
  WIn as ie,
  XDr as ae,
  XFn as oe,
  XHn as se,
  XMr as b,
  Xjr as ce,
  YHn as le,
  Yjr as ue,
  ZFn as x,
  ZIn as S,
  a$n as de,
  aIr as C,
  c$n as fe,
  eIn as pe,
  eRn as me,
  eln as w,
  emt as he,
  fUn as ge,
  hpt as _e,
  iLn as ve,
  lIr as T,
  mFn as E,
  mpt as D,
  nmt as O,
  npt as k,
  oIr as A,
  ppt as j,
  qNn as M,
  s$n as N,
  sIr as P,
  tLn as F,
  tNr as ye,
  tln as I,
  tpt as be,
  uUn as xe,
  wpt as L,
} from "./app-initial-5851df3f6cb1.js";
function R(e) {
  if (e == null) return null;
  let t = re(e),
    n = f(e);
  return t == null ||
    t === `unknown` ||
    t === `onedrive` ||
    n == null ||
    (n.kind !== `root` && n.kind !== `folder`) ||
    (t === `sharepoint` && !i(e)) ||
    (t === `google_drive` && n.kind === `root` && n.encodedAccountKey == null) ||
    (t === `box` && n.kind === `folder` && !/^[1-9][0-9]*$/u.test(n.nativeId ?? ``)) ||
    (t === `dropbox` && n.kind === `folder` && !/^id:[A-Za-z0-9_:-]+$/u.test(n.nativeId ?? ``))
    ? null
    : { provider: t, uploadSource: le[t] };
}
function z() {
  return (z = e(() => {
    (l(), se(), y());
  }))();
}
var B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (r(),
      z(),
      xe(),
      L(),
      (B = a(I, [])),
      (V = a(I, !1)),
      (H = a(I, 0)),
      (U = u(
        w,
        ({ scope: e, get: t }) =>
          t(ge) &&
          !t(V) &&
          !e.value.deleted &&
          !e.value.search &&
          (e.value.tab === `images` || e.value.categories.length === 0) &&
          (e.value.sources.length === 0 ||
            (e.value.imageSourceTabs === !0 && e.value.sources[0] === `uploaded`)),
      )),
      (W = u(
        w,
        ({ scope: e, get: t }) =>
          t(U) &&
          (e.value.directoryId == null ||
            (!e.value.directoryId.startsWith(`external-`) && !e.value.directoryId.startsWith(`library:`))),
      )),
      (G = u(
        w,
        ({ scope: e, get: t }) =>
          t(U) &&
          (e.value.directoryId == null ||
            (!e.value.directoryId.startsWith(`library:`) &&
              (!e.value.directoryId.startsWith(`external-`) || R(e.value.directoryId) != null))),
      )));
  }))();
}
async function Se(e, t) {
  if (t.length === 0 || !e.get(G)) return;
  let n = e.get(k);
  q(e, { action: x.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_FILE_SELECTED }, n);
  let r = e.value.directoryId,
    i = e.value.basePath,
    a = e.get(he) ?? h(e.value);
  R(r);
  let { pathname: o, search: s } = e.get(P),
    { accountId: c, userId: l } = e.value,
    u = () => e.get(v) === c && e.get(b) === (l ?? null);
  e.set(V, !0);
  try {
    if (!u()) return;
    let c = t.map((e) => ({
      id: crypto.randomUUID(),
      fileName: e.name,
      file: e,
      directoryId: r,
      originBasePath: i,
      status: `queued`,
      progress: 0,
    }));
    e.set(B, (e) => [...c, ...e]);
    let l = await ce(c, (t) => J(e, t, i, u), { concurrency: 5 }),
      f = l.filter((e) => e.status === `success`).length,
      p = l.flatMap((e) => (e.libraryFileId == null ? [] : [e.libraryFileId])),
      m = x.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_PARTIAL;
    (f === t.length
      ? (m = x.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_SUCCEEDED)
      : f === 0 && (m = x.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_FAILED),
      q(
        e,
        {
          action: m,
          libraryFileIds: p.length > 0 && JSON.stringify({ libraryFileIds: p }).length <= 2e3 ? p : void 0,
          error:
            l.find((e) => e.status !== `success`)?.error ??
            (f === t.length
              ? void 0
              : { type: E.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE, code: `upload_failed` }),
        },
        n,
      ),
      l.some((e) => e.status !== `failed`) && Y(e),
      f > 0 &&
        !(
          e.value.imageSourceTabs &&
          t.every(
            (e, t) => l[t]?.status !== `success` || d({ fileName: e.name, mimeType: e.type }).isImageLike,
          )
        ) &&
        u() &&
        e.get(P).pathname === o &&
        e.get(P).search === s &&
        O(e, h({ ...e.value, tab: `all`, directoryId: r, search: ``, categories: [], sources: [] }), {
          expectedUrl: a,
        }));
  } finally {
    e.set(V, !1);
  }
}
async function Ce(e, t) {
  let n = e.get(B).find((e) => e.id === t);
  if (n?.status !== `failed` || !n.retryable || n.file == null) return;
  let { accountId: r, userId: i } = e.value;
  e.set(B, (e) => e.map((e) => (e.id === t ? { ...e, status: `queued` } : e)));
  let a = `/space`;
  (`originBasePath` in n && typeof n.originBasePath == `string`
    ? (a = n.originBasePath)
    : e.get(P).pathname?.startsWith(`/library`) && (a = `/library`),
    (await J(e, n, a, () => e.get(v) === r && e.get(b) === (i ?? null))).status !== `failed` && Y(e));
}
function we(e, t) {
  e.set(B, (e) =>
    e.filter((e) =>
      t == null ? e.status !== `failed` && e.status !== `success` : e.id !== t || e.status !== `failed`,
    ),
  );
}
function q(e, t, n = e.get(k)) {
  ne(e, oe, {
    ...t,
    sessionId: n.sessionId,
    libraryVariant: n.libraryVariant,
    destinationProvider: D(e.value.directoryId),
  });
}
async function J(e, t, n, r) {
  for (; e.get(H) >= 5;) await e.when((e) => e.get(H) < 5);
  e.set(H, (e) => e + 1);
  try {
    return await Te(e, t, n, r);
  } finally {
    e.set(H, (e) => e - 1);
  }
}
function Y(e) {
  e.queryClient.invalidateQueries({ queryKey: [`library-api`, e.value.accountId] }).catch(() => void 0);
}
async function Te(e, t, n, r) {
  let i = t.file;
  if (i == null) return { status: `failed` };
  let a = e.get(A),
    o = R(t.directoryId),
    c = (n) => e.set(B, (e) => e.map((e) => (e.id === t.id ? { ...e, ...n } : e)));
  if (i.name.trim().startsWith(`.`) || i.size > S)
    return (
      c({
        status: `failed`,
        retryable: !1,
        file: void 0,
        errorMessage: i.name.trim().startsWith(`.`)
          ? a.formatMessage({
              id: `libraryNext.upload.hiddenName`,
              defaultMessage: `File names cannot start with "."`,
              description: `Inline Library upload error for a selected hidden file. Rename the file to upload it`,
            })
          : a.formatMessage({
              id: `libraryNext.upload.tooLarge`,
              defaultMessage: `This file is too large to upload. Try a smaller file`,
              description: `Inline Library upload error when a selected file exceeds the upload size limit`,
            }),
      }),
      { status: `failed` }
    );
  let l;
  for (let u = 0; u <= 2; u += 1) {
    if (!r())
      return (
        c({ status: `failed`, retryable: !1, file: void 0, errorMessage: a.formatMessage(Q.accountChanged) }),
        { status: `failed` }
      );
    c({ status: `uploading`, progress: 0, errorMessage: void 0, retryable: void 0 });
    let d = !1,
      f = l?.signal ?? new AbortController().signal,
      m =
        l?.eventLogger ??
        ie(e, {
          attemptId: crypto.randomUUID(),
          conversationId: void 0,
          fileSizeBytes: i.size,
          hasClientPreparation: !1,
          isTemporaryChat: !1,
          signal: f,
        });
    try {
      let n =
        l?.attachment ??
        (await ve(e, i, {
          ...(o == null
            ? { directoryId: t.directoryId, libraryPersistenceMode: `required`, storeInLibrary: !0 }
            : { externalLibraryUploadSource: o.uploadSource, storeInLibrary: !1 }),
          uploadPurpose: `library`,
          eventLogger: m,
          signal: f,
          beforeRequest: () => {
            if (!r()) throw Error(`Upload account changed`);
          },
          onProgress: (e) => c({ progress: e }),
          onProcessing: () => {
            ((d = o == null), c({ status: `processing`, progress: 100 }));
          },
        }));
      o != null && l == null && (l = { attachment: n, eventLogger: m, signal: f });
      let a = n.libraryFileId;
      if (o != null && t.directoryId != null) {
        if (!r()) throw Error(`Upload account changed`);
        ((d = o.provider !== `google_drive`),
          c({ status: `processing`, progress: 100 }),
          (a = (
            await e
              .get(g)
              .safePost(`/files/library/files`, {
                requestBody: {
                  parent_directory_id: t.directoryId,
                  file_id: n.id,
                  file_name: n.name,
                  mime_type: n.mimeType ?? null,
                },
                ...(o.provider === `google_drive` ? {} : { retry: !1 }),
                signal: f,
              })
          ).id));
      }
      return (
        m.finish({ result: `success`, fileId: n.id }),
        c({ status: `success`, progress: 100, file: void 0 }),
        { status: `success`, libraryFileId: a }
      );
    } catch (t) {
      let o, f;
      t instanceof p
        ? ((o = t.errorCode), (f = t.httpStatus))
        : t instanceof Error && ((o = de(t)), t instanceof s && (f = t.status));
      let h = t instanceof s && t.errorKind === `network`,
        g = r() && !d && !X.has(o ?? ``) && (h || f == null || f === 408 || f === 429 || f >= 500);
      if (g && (h || Z.has(o ?? ``) || f === 408 || f === 429 || (f != null && f >= 500)) && u < 2) {
        let e = t instanceof s ? (t.retryAtMs ?? 0) - Date.now() : 0;
        if (e <= 3e4) {
          (l ?? m.finish({ result: `error`, error: t }),
            await new Promise((t) => setTimeout(t, Math.max(250 * 2 ** u, e))));
          continue;
        }
      }
      m.finish({ result: `error`, error: t });
      let _;
      return (
        (_ = r()
          ? o === `library_storage_limit_exceeded` || o === `over_user_quota`
            ? M(n, ee(e))
              ? a.formatMessage({
                  id: `libraryNext.upload.storageFull.storage.space`,
                  defaultMessage: `Your storage is full. Remove files to create space, then try again.`,
                  description: `Inline upload failure shown on a Space surface when the user's cloud file storage quota is exhausted.`,
                })
              : a.formatMessage({
                  id: `libraryNext.upload.storageFull.storage.library`,
                  defaultMessage: `Your storage is full. Remove files to create space, then try again`,
                  description: `Inline upload failure shown on a Library surface when the user's cloud file storage quota is exhausted.`,
                })
            : o === `file_too_large`
              ? a.formatMessage({
                  id: `libraryNext.upload.tooLarge`,
                  defaultMessage: `This file is too large to upload. Try a smaller file`,
                  description: `Inline Library upload error when a selected file exceeds the upload size limit`,
                })
              : d
                ? a.formatMessage({
                    id: `libraryNext.upload.checkLibrary`,
                    defaultMessage: `Upload may have completed. Check Library before trying again`,
                    description: `Inline Library upload status when processing fails after a file may already have been saved. The user should check for the file before selecting it again`,
                  })
                : ((t instanceof Error && (f == null || f < 500) ? N(t) : null) ??
                  a.formatMessage({
                    id: `libraryNext.upload.failed`,
                    defaultMessage: `Unable to upload`,
                    description: `Inline status for a file that failed to upload into Library`,
                  }))
          : a.formatMessage(Q.accountChanged)),
        c({ status: `failed`, progress: 0, errorMessage: _, retryable: g, file: g ? i : void 0 }),
        { status: d ? `uncertain` : `failed`, error: j(t) }
      );
    }
  }
  return { status: `failed` };
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    (n(),
      pe(),
      ue(),
      c(),
      T(),
      ye(),
      fe(),
      F(),
      _(),
      me(),
      C(),
      te(),
      ae(),
      o(),
      z(),
      be(),
      L(),
      _e(),
      m(),
      K(),
      (X = new Set([
        `ace_pod_expired`,
        `file_corrupted`,
        `file_empty`,
        `file_encrypted`,
        `file_expired`,
        `file_not_found`,
        `file_rejected`,
        `file_too_large`,
        `file_zero_bytes`,
        `library_storage_limit_exceeded`,
        `over_user_quota`,
        `permission_error`,
        `too_many_tokens`,
        `unhandled_mime_type`,
      ])),
      (Z = new Set([`failed_upload_to_blobstore`, `request_transport_error`, `throttled`])),
      (Q = t({
        accountChanged: {
          id: `libraryNext.upload.accountChanged`,
          defaultMessage: `Account changed. Select this file again to upload`,
          description: `Inline Library upload error when the user switches accounts before a queued file starts uploading`,
        },
      })));
  }))();
}
export { Se as a, K as c, Ce as i, V as l, $ as n, W as o, q as r, G as s, we as t, B as u };
//# sourceMappingURL=actions-370de4b5bf69.js.map
