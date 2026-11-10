import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pit as t, jit as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  BAr as r,
  BRn as i,
  IAr as a,
  Ozn as o,
  _zn as s,
  fzn as c,
  gzn as l,
  hzn as u,
  uzn as d,
  xMr as f,
  yMr as p,
} from "./app-initial-ad16eaadf81f.js";
function m(e, t, n) {
  let i;
  (t.isOwner != null &&
    (i = t.isOwner
      ? c.CHATGPT_FILE_LIBRARY_SHARING_ACTOR_OWNER
      : c.CHATGPT_FILE_LIBRARY_SHARING_ACTOR_RECIPIENT),
    f(e, d, {
      ...n,
      actor: i,
      resourceKind:
        t.sharingScope.resourceKind === `file`
          ? l.CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FILE
          : l.CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FOLDER,
      libraryFileId: t.sharingScope.resourceKind === `file` ? t.sharingScope.libraryFileId : void 0,
      folderId: t.sharingScope.resourceKind === `folder` ? t.sharingScope.libraryFileId : void 0,
      shareSessionId: t.shareSessionId,
      productExperience: e.get(r),
    }));
}
function h(e) {
  switch (e) {
    case `viewer`:
      return s.CHATGPT_FILE_LIBRARY_SHARING_ROLE_VIEWER;
    case `editor`:
      return s.CHATGPT_FILE_LIBRARY_SHARING_ROLE_EDITOR;
    case `commenter`:
      return s.CHATGPT_FILE_LIBRARY_SHARING_ROLE_COMMENTER;
    case void 0:
      return;
  }
}
function g(e) {
  let t = e[0];
  if (t == null) return u.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED;
  let n = v(t);
  return e.every((e) => v(e) === n) ? n : u.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED;
}
function _(e) {
  if (!(e instanceof n)) return;
  let t = e.responseStatus,
    r = e.errorKind === `network` || t == null,
    a = e.errorCode != null && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
    o = a?.toLowerCase(),
    s;
  return (
    (s = r
      ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR
      : t === 507 || o?.includes(`storage_limit`) || o?.includes(`quota`)
        ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT
        : t === 404 ||
            o?.includes(`missing_library_file`) ||
            o?.includes(`library_file_not_found`) ||
            o === `file_not_found` ||
            o === `file_expired`
          ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_MISSING_LIBRARY_FILE
          : t === 408 || t === 504
            ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_TIMEOUT
            : t === 401 || t === 403
              ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_AUTH_ERROR
              : t === 429
                ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_RATE_LIMITED
                : t >= 500
                  ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_SERVER_ERROR
                  : t >= 400
                    ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST
                    : i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE),
    { type: s, code: a, httpStatus: !r && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0 }
  );
}
function v(e) {
  return e.recipient_type === `email`
    ? u.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL
    : e.principal_type === `group`
      ? u.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP
      : u.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER;
}
function y() {
  return (y = e(() => {
    (o(), a(), p(), t());
  }))();
}
export { m as a, y as i, g as n, h as r, _ as t };
//# sourceMappingURL=analytics-74ff0509f9f8.js.map
