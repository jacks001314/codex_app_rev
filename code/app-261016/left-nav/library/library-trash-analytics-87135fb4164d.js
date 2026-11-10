import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pit as t, eat as n, jit as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  BRn as i,
  Ezn as a,
  FAr as o,
  IAr as s,
  IRn as c,
  Ozn as l,
  VRn as u,
  Ydr as d,
  izn as f,
  rzn as p,
  szn as m,
  xMr as h,
  yMr as g,
} from "./app-initial-ad16eaadf81f.js";
function _(e, t) {
  h(e, c, {
    artifactIds: t.map(({ node: e }) => e.id),
    directoryIds: [],
    itemCount: n(t.length),
    libraryOrigin: b,
  });
}
function v(e, t, n, r) {
  h(e, u, {
    interactionType: n,
    sessionId: t,
    libraryVariant: a.CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT,
    productExperience: e.get(o),
    libraryOrigin: b,
    operation: p.CHATGPT_FILE_LIBRARY_OPERATION_PERMANENT_DELETE,
    scope: m.CHATGPT_FILE_LIBRARY_SCOPE_ALL,
    error: y(r),
  });
}
function y(e) {
  if (!(e instanceof r)) return;
  let t = e.responseStatus,
    n = e.errorKind === `network` || t == null,
    a = e.errorCode != null && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
    o;
  return (
    (o = n
      ? i.CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR
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
    { type: o, code: a, httpStatus: !n && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0 }
  );
}
var b;
function x() {
  return (x = e(() => {
    (d(), l(), s(), g(), t(), (b = f.CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN));
  }))();
}
export { v as n, _ as r, x as t };
//# sourceMappingURL=library-trash-analytics-87135fb4164d.js.map
