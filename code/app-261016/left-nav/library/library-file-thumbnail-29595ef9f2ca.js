import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cj as t, FBt as n, Ij as r, LNt as i, PBt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as o,
  NYn as s,
  PYn as c,
  TYn as l,
  _Xn as u,
  mXn as d,
  xYn as f,
  xjr as p,
} from "./app-initial-ad16eaadf81f.js";
function m(e) {
  let t = (0, h.c)(15),
    { className: n, file: i, fallback: a } = e,
    c = o(`1490494395`),
    u = r({ fileName: `name` in i ? i.name : i.file_name, mimeType: i.mime_type ?? void 0 }),
    f =
      !(`kind` in i && i.kind === `directory`) &&
      d(i.id) == null &&
      (i.library_file_category === `image` || u.isImageLike),
    p;
  t[0] === i.id ? (p = t[1]) : ((p = [`library-picker-thumbnail`, i.id]), (t[0] = i.id), (t[1] = p));
  let m;
  t[2] !== i.id || t[3] !== i.thumbnail_preview_url || t[4] !== i.thumbnail_url || t[5] !== c
    ? ((m = async () => ({
        kind: `available`,
        ...(await s(i.id, {
          fetchThumbnailUrl: c,
          thumbnailPreviewUrl: i.thumbnail_preview_url ?? null,
          thumbnailUrl: i.thumbnail_url ?? null,
        })),
      })),
      (t[2] = i.id),
      (t[3] = i.thumbnail_preview_url),
      (t[4] = i.thumbnail_url),
      (t[5] = c),
      (t[6] = m))
    : (m = t[6]);
  let v;
  t[7] !== p || t[8] !== m
    ? ((v = { cacheKey: p, resolveAsset: m }), (t[7] = p), (t[8] = m), (t[9] = v))
    : (v = t[9]);
  let { src: y } = l(f ? i.id : ``, v),
    [b, x] = (0, g.useState)(null),
    S;
  return (
    t[10] !== n || t[11] !== b || t[12] !== a || t[13] !== y
      ? ((S =
          y != null && y !== b
            ? (0, _.jsx)(`img`, {
                alt: ``,
                className: n,
                decoding: `async`,
                draggable: !1,
                loading: `lazy`,
                src: y,
                onError: () => x(y),
              })
            : (0, _.jsx)(_.Fragment, { children: a })),
        (t[10] = n),
        (t[11] = b),
        (t[12] = a),
        (t[13] = y),
        (t[14] = S))
      : (S = t[14]),
    S
  );
}
var h, g, _;
function v() {
  return (v = e(() => {
    ((h = a()), t(), (g = n()), u(), c(), p(), f(), (_ = i()));
  }))();
}
export { v as n, m as t };
//# sourceMappingURL=library-file-thumbnail-29595ef9f2ca.js.map
