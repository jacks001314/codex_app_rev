import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CCt as t,
  Cj as n,
  Ij as r,
  Oit as i,
  XOt as a,
  YOt as o,
  ZSt as s,
  jit as c,
  kCt as l,
  lj as u,
  rj as d,
  uj as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as p,
  BRn as m,
  BRr as h,
  CIr as g,
  Cmt as ee,
  DKn as te,
  F2n as ne,
  I2n as re,
  Imt as ie,
  Mir as ae,
  N2n as oe,
  Nmt as _,
  OBn as se,
  Ozn as ce,
  SIr as le,
  Smt as ue,
  TBn as de,
  Tzn as v,
  Xfn as y,
  Yfn as b,
  Ymt as x,
  _Vn as fe,
  _Xn as pe,
  bLn as me,
  dht as he,
  dmt as S,
  fKn as ge,
  fLn as _e,
  gVn as ve,
  jBn as C,
  kKn as w,
  lht as T,
  mXn as E,
  pKn as D,
  umt as O,
  vBn as k,
  vIr as A,
  vLn as j,
  wLr as M,
  wmt as N,
  wzn as P,
  xMr as F,
  yBn as I,
  yIr as ye,
  yLn as be,
  yMr as xe,
  zRr as L,
} from "./app-initial-ad16eaadf81f.js";
function R(e) {
  if (e == null) return null;
  let t = E(e),
    n = f(e);
  return t == null ||
    t === `unknown` ||
    t === `onedrive` ||
    n == null ||
    (n.kind !== `root` && n.kind !== `folder`) ||
    (t === `sharepoint` && !u(e)) ||
    (t === `google_drive` && n.kind === `root` && n.encodedAccountKey == null) ||
    (t === `box` && n.kind === `folder` && !/^[1-9][0-9]*$/u.test(n.nativeId ?? ``)) ||
    (t === `dropbox` && n.kind === `folder` && !/^id:[A-Za-z0-9_:-]+$/u.test(n.nativeId ?? ``))
    ? null
    : { provider: t, uploadSource: ge[t] };
}
function z() {
  return (z = e(() => {
    (d(), D(), pe());
  }))();
}
var B, V, H, U, W, G;
function K() {
  return (K = e(() => {
    (s(),
      z(),
      te(),
      _(),
      (B = l(y, [])),
      (V = l(y, !1)),
      (H = l(y, 0)),
      (U = t(
        b,
        ({ scope: e, get: t }) =>
          t(w) &&
          !t(V) &&
          !e.value.deleted &&
          !e.value.search &&
          (e.value.tab === `images` || e.value.categories.length === 0) &&
          (e.value.sources.length === 0 ||
            (e.value.imageSourceTabs === !0 && e.value.sources[0] === `uploaded`)),
      )),
      (W = t(
        b,
        ({ scope: e, get: t }) =>
          t(U) &&
          (e.value.directoryId == null ||
            (!e.value.directoryId.startsWith(`external-`) && !e.value.directoryId.startsWith(`library:`))),
      )),
      (G = t(
        b,
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
  let n = e.get(S);
  q(e, { action: v.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_FILE_SELECTED }, n);
  let i = e.value.directoryId,
    a = e.value.basePath,
    o = e.get(T) ?? x(e.value);
  R(i);
  let { pathname: s, search: c } = e.get(p),
    { accountId: l, userId: u } = e.value,
    d = () => e.get(L) === l && e.get(h) === (u ?? null);
  e.set(V, !0);
  try {
    if (!d()) return;
    let l = t.map((e) => ({
      id: crypto.randomUUID(),
      fileName: e.name,
      file: e,
      directoryId: i,
      originBasePath: a,
      status: `queued`,
      progress: 0,
    }));
    e.set(B, (e) => [...l, ...e]);
    let u = await ye(l, (t) => J(e, t, a, d), { concurrency: 5 }),
      f = u.filter((e) => e.status === `success`).length,
      h = u.flatMap((e) => (e.libraryFileId == null ? [] : [e.libraryFileId])),
      g = v.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_PARTIAL;
    (f === t.length
      ? (g = v.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_SUCCEEDED)
      : f === 0 && (g = v.CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_FAILED),
      q(
        e,
        {
          action: g,
          libraryFileIds: h.length > 0 && JSON.stringify({ libraryFileIds: h }).length <= 2e3 ? h : void 0,
          error:
            u.find((e) => e.status !== `success`)?.error ??
            (f === t.length
              ? void 0
              : { type: m.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE, code: `upload_failed` }),
        },
        n,
      ),
      u.some((e) => e.status !== `failed`) && Y(e),
      f > 0 &&
        !(
          e.value.imageSourceTabs &&
          t.every(
            (e, t) => u[t]?.status !== `success` || r({ fileName: e.name, mimeType: e.type }).isImageLike,
          )
        ) &&
        d() &&
        e.get(p).pathname === s &&
        e.get(p).search === c &&
        he(e, x({ ...e.value, tab: `all`, directoryId: i, search: ``, categories: [], sources: [] }), {
          expectedUrl: o,
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
    : e.get(p).pathname?.startsWith(`/library`) && (a = `/library`),
    (await J(e, n, a, () => e.get(L) === r && e.get(h) === (i ?? null))).status !== `failed` && Y(e));
}
function we(e, t) {
  e.set(B, (e) =>
    e.filter((e) =>
      t == null ? e.status !== `failed` && e.status !== `success` : e.id !== t || e.status !== `failed`,
    ),
  );
}
function q(e, t, n = e.get(S)) {
  F(e, P, {
    ...t,
    sessionId: n.sessionId,
    libraryVariant: n.libraryVariant,
    destinationProvider: ee(e.value.directoryId),
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
  let a = e.get(g),
    o = R(t.directoryId),
    s = (n) => e.set(B, (e) => e.map((e) => (e.id === t.id ? { ...e, ...n } : e)));
  if (i.name.trim().startsWith(`.`) || i.size > de)
    return (
      s({
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
        s({ status: `failed`, retryable: !1, file: void 0, errorMessage: a.formatMessage(Q.accountChanged) }),
        { status: `failed` }
      );
    s({ status: `uploading`, progress: 0, errorMessage: void 0, retryable: void 0 });
    let d = !1,
      f = l?.signal ?? new AbortController().signal,
      p =
        l?.eventLogger ??
        k(e, {
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
        (await C(e, i, {
          ...(o == null
            ? { directoryId: t.directoryId, libraryPersistenceMode: `required`, storeInLibrary: !0 }
            : { externalLibraryUploadSource: o.uploadSource, storeInLibrary: !1 }),
          uploadPurpose: `library`,
          eventLogger: p,
          signal: f,
          beforeRequest: () => {
            if (!r()) throw Error(`Upload account changed`);
          },
          onProgress: (e) => s({ progress: e }),
          onProcessing: () => {
            ((d = o == null), s({ status: `processing`, progress: 100 }));
          },
        }));
      o != null && l == null && (l = { attachment: n, eventLogger: p, signal: f });
      let a = n.libraryFileId;
      if (o != null && t.directoryId != null) {
        if (!r()) throw Error(`Upload account changed`);
        ((d = o.provider !== `google_drive`),
          s({ status: `processing`, progress: 100 }),
          (a = (
            await e
              .get(ie)
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
        p.finish({ result: `success`, fileId: n.id }),
        s({ status: `success`, progress: 100, file: void 0 }),
        { status: `success`, libraryFileId: a }
      );
    } catch (t) {
      let o, f;
      t instanceof ve
        ? ((o = t.errorCode), (f = t.httpStatus))
        : t instanceof Error && ((o = oe(t)), t instanceof c && (f = t.status));
      let m = t instanceof c && t.errorKind === `network`,
        h = r() && !d && !X.has(o ?? ``) && (m || f == null || f === 408 || f === 429 || f >= 500);
      if (h && (m || Z.has(o ?? ``) || f === 408 || f === 429 || (f != null && f >= 500)) && u < 2) {
        let e = t instanceof c ? (t.retryAtMs ?? 0) - Date.now() : 0;
        if (e <= 3e4) {
          (l ?? p.finish({ result: `error`, error: t }),
            await new Promise((t) => setTimeout(t, Math.max(250 * 2 ** u, e))));
          continue;
        }
      }
      p.finish({ result: `error`, error: t });
      let g;
      return (
        (g = r()
          ? o === `library_storage_limit_exceeded` || o === `over_user_quota`
            ? be(n, me(e))
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
                : ((t instanceof Error && (f == null || f < 500) ? ne(t) : null) ??
                  a.formatMessage({
                    id: `libraryNext.upload.failed`,
                    defaultMessage: `Unable to upload`,
                    description: `Inline status for a file that failed to upload into Library`,
                  }))
          : a.formatMessage(Q.accountChanged)),
        s({ status: `failed`, progress: 0, errorMessage: g, retryable: h, file: h ? i : void 0 }),
        { status: d ? `uncertain` : `failed`, error: ue(t) }
      );
    }
  }
  return { status: `failed` };
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    (n(),
      ce(),
      A(),
      a(),
      ae(),
      M(),
      re(),
      se(),
      I(),
      fe(),
      le(),
      j(),
      xe(),
      i(),
      z(),
      O(),
      _(),
      N(),
      _e(),
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
      (Q = o({
        accountChanged: {
          id: `libraryNext.upload.accountChanged`,
          defaultMessage: `Account changed. Select this file again to upload`,
          description: `Inline Library upload error when the user switches accounts before a queued file starts uploading`,
        },
      })));
  }))();
}
export { Se as a, K as c, Ce as i, V as l, $ as n, W as o, q as r, G as s, we as t, B as u };
//# sourceMappingURL=actions-5a805ebd2dda.js.map
