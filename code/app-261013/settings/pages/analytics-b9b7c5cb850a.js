import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { hrt as t, vrt as n } from "./app-shared-bbfeca5e5737.js";
import {
  HFn as r,
  IFn as i,
  QDr as a,
  RFn as o,
  SEr as s,
  UFn as c,
  VFn as l,
  XDr as u,
  eIn as d,
  mFn as f,
  vEr as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e, t, n) {
  let c;
  (t.isOwner != null &&
    (c = t.isOwner
      ? o.CHATGPT_FILE_LIBRARY_SHARING_ACTOR_OWNER
      : o.CHATGPT_FILE_LIBRARY_SHARING_ACTOR_RECIPIENT),
    a(e, i, {
      ...n,
      actor: c,
      resourceKind:
        t.sharingScope.resourceKind === `file`
          ? r.CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FILE
          : r.CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FOLDER,
      libraryFileId: t.sharingScope.resourceKind === `file` ? t.sharingScope.libraryFileId : void 0,
      folderId: t.sharingScope.resourceKind === `folder` ? t.sharingScope.libraryFileId : void 0,
      shareSessionId: t.shareSessionId,
      productExperience: e.get(s),
    }));
}
function h(e) {
  switch (e) {
    case `viewer`:
      return c.CHATGPT_FILE_LIBRARY_SHARING_ROLE_VIEWER;
    case `editor`:
      return c.CHATGPT_FILE_LIBRARY_SHARING_ROLE_EDITOR;
    case `commenter`:
      return c.CHATGPT_FILE_LIBRARY_SHARING_ROLE_COMMENTER;
    case void 0:
      return;
  }
}
function g(e) {
  let t = e[0];
  if (t == null) return l.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED;
  let n = v(t);
  return e.every((e) => v(e) === n) ? n : l.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED;
}
function _(e) {
  if (!(e instanceof t)) return;
  let n = e.responseStatus,
    r = e.errorKind === `network` || n == null,
    i = e.errorCode != null && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
    a = i?.toLowerCase(),
    o;
  return (
    (o = r
      ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR
      : n === 507 || a?.includes(`storage_limit`) || a?.includes(`quota`)
        ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT
        : n === 404 ||
            a?.includes(`missing_library_file`) ||
            a?.includes(`library_file_not_found`) ||
            a === `file_not_found` ||
            a === `file_expired`
          ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_MISSING_LIBRARY_FILE
          : n === 408 || n === 504
            ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_TIMEOUT
            : n === 401 || n === 403
              ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_AUTH_ERROR
              : n === 429
                ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_RATE_LIMITED
                : n >= 500
                  ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_SERVER_ERROR
                  : n >= 400
                    ? f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST
                    : f.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE),
    { type: o, code: i, httpStatus: !r && Number.isInteger(n) && n >= 100 && n <= 599 ? n : void 0 }
  );
}
function v(e) {
  return e.recipient_type === `email`
    ? l.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL
    : e.principal_type === `group`
      ? l.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP
      : l.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER;
}
function y() {
  return (y = e(() => {
    (d(), p(), u(), n());
  }))();
}
export { m as a, y as i, g as n, h as r, _ as t };
//# sourceMappingURL=analytics-b9b7c5cb850a.js.map
