import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { PA as t, qA as n, vzt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
import {
  KKn as o,
  QGn as s,
  UKn as c,
  dKn as l,
  eDr as u,
  nDr as d,
  nKn as f,
  uKn as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e) {
  let t = (0, h.c)(15),
    { className: r, file: i, fallback: a } = e,
    o = d(`1490494395`),
    s = n({ fileName: `name` in i ? i.name : i.file_name, mimeType: i.mime_type ?? void 0 }),
    l =
      !(`kind` in i && i.kind === `directory`) &&
      c(i.id) == null &&
      (i.library_file_category === `image` || s.isImageLike),
    u;
  t[0] === i.id ? (u = t[1]) : ((u = [`library-picker-thumbnail`, i.id]), (t[0] = i.id), (t[1] = u));
  let m;
  t[2] !== i.id || t[3] !== i.thumbnail_preview_url || t[4] !== i.thumbnail_url || t[5] !== o
    ? ((m = async () => ({
        kind: `available`,
        ...(await p(i.id, {
          fetchThumbnailUrl: o,
          thumbnailPreviewUrl: i.thumbnail_preview_url ?? null,
          thumbnailUrl: i.thumbnail_url ?? null,
        })),
      })),
      (t[2] = i.id),
      (t[3] = i.thumbnail_preview_url),
      (t[4] = i.thumbnail_url),
      (t[5] = o),
      (t[6] = m))
    : (m = t[6]);
  let v;
  t[7] !== u || t[8] !== m
    ? ((v = { cacheKey: u, resolveAsset: m }), (t[7] = u), (t[8] = m), (t[9] = v))
    : (v = t[9]);
  let { src: y } = f(l ? i.id : ``, v),
    [b, x] = (0, g.useState)(null),
    S;
  return (
    t[10] !== r || t[11] !== b || t[12] !== a || t[13] !== y
      ? ((S =
          y != null && y !== b
            ? (0, _.jsx)(`img`, {
                alt: ``,
                className: r,
                decoding: `async`,
                draggable: !1,
                loading: `lazy`,
                src: y,
                onError: () => x(y),
              })
            : (0, _.jsx)(_.Fragment, { children: a })),
        (t[10] = r),
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
    ((h = r()), t(), (g = a()), o(), l(), u(), s(), (_ = i()));
  }))();
}
export { v as n, m as t };
//# sourceMappingURL=library-file-thumbnail-f2bba5729b28.js.map
