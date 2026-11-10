import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Rrt as t, hrt as n, vrt as r } from "./app-shared-bbfeca5e5737.js";
import {
  AFn as i,
  NFn as a,
  QDr as o,
  QFn as s,
  XDr as c,
  _Er as l,
  eIn as u,
  hFn as d,
  jFn as f,
  mFn as p,
  ocr as m,
  uFn as h,
  vEr as g,
} from "./app-initial-5851df3f6cb1.js";
function _(e, n) {
  o(e, h, {
    artifactIds: n.map(({ node: e }) => e.id),
    directoryIds: [],
    itemCount: t(n.length),
    libraryOrigin: b,
  });
}
function v(e, t, n, r) {
  o(e, d, {
    interactionType: n,
    sessionId: t,
    libraryVariant: s.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT,
    productExperience: e.get(l),
    libraryOrigin: b,
    operation: i.CHATGPT_FILE_LIBRARY_OPERATION_PERMANENT_DELETE,
    scope: a.CHATGPT_FILE_LIBRARY_SCOPE_ALL,
    error: y(r),
  });
}
function y(e) {
  if (!(e instanceof n)) return;
  let t = e.responseStatus,
    r = e.errorKind === `network` || t == null,
    i = e.errorCode != null && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
    a;
  return (
    (a = r
      ? p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR
      : t === 408 || t === 504
        ? p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_TIMEOUT
        : t === 401 || t === 403
          ? p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_AUTH_ERROR
          : t === 429
            ? p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_RATE_LIMITED
            : t >= 500
              ? p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_SERVER_ERROR
              : t >= 400
                ? p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST
                : p.CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE),
    { type: a, code: i, httpStatus: !r && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0 }
  );
}
var b;
function x() {
  return (x = e(() => {
    (m(), u(), g(), c(), r(), (b = f.CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN));
  }))();
}
export { v as n, _ as r, x as t };
//# sourceMappingURL=library-trash-analytics-b5f56547a9f3.js.map
