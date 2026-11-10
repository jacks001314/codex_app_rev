import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Pxt as t,
  Vxt as n,
  _O as r,
  mO as i,
  vO as a,
  vzt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bx as c,
  GMr as l,
  NDr as u,
  Rx as d,
  SG as f,
  XMr as p,
  eNr as m,
  pOr as h,
  tNr as g,
  xG as _,
} from "./app-initial-5851df3f6cb1.js";
import { i as v, r as y } from "./library-file-preview-kind-e4aa21315c05.js";
import { n as b, t as x } from "./cloud-file-preview.electron-11396ee5238f.js";
function S(e) {
  "use forget";
  let t = (0, C.c)(21),
    { accountId: a, authenticatedAccountId: o, canFavorite: s, file: c, userId: u, onClose: f } = e,
    g = n(h),
    v = n(l),
    b = n(p),
    S = n(m);
  if (g !== a || v !== o || b !== u || !S) return null;
  let T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { "aria-describedby": void 0 }), (t[0] = T))
    : (T = t[0]);
  let E;
  t[1] === f
    ? (E = t[2])
    : ((E = (e) => {
        e || f();
      }),
      (t[1] = f),
      (t[2] = E));
  let D;
  t[3] === c.name
    ? (D = t[4])
    : ((D = (0, w.jsx)(r, { className: `sr-only`, children: c.name })), (t[3] = c.name), (t[4] = D));
  let O;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { pathname: `/library`, routeKind: `other`, routeTemplate: `/library` }), (t[5] = O))
    : (O = t[5]);
  let k;
  t[6] !== s || t[7] !== c.category || t[8] !== c.id || t[9] !== c.mimeType || t[10] !== c.name || t[11] !== f
    ? ((k = () =>
        s
          ? (0, w.jsx)(d, {
              libraryFileId: c.id,
              surface:
                y({ file_name: c.name, library_file_category: c.category, mime_type: c.mimeType }) === `image`
                  ? `image_lightbox`
                  : `file_preview`,
              onView: f,
            })
          : void 0),
      (t[6] = s),
      (t[7] = c.category),
      (t[8] = c.id),
      (t[9] = c.mimeType),
      (t[10] = c.name),
      (t[11] = f),
      (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] !== c || t[14] !== f || t[15] !== k
    ? ((A = (0, w.jsx)(_, {
        route: O,
        children: (0, w.jsx)(x, {
          file: c,
          openTarget: `external-browser`,
          onClose: f,
          renderFavoriteAction: k,
        }),
      })),
      (t[13] = c),
      (t[14] = f),
      (t[15] = k),
      (t[16] = A))
    : (A = t[16]);
  let j;
  return (
    t[17] !== E || t[18] !== D || t[19] !== A
      ? ((j = (0, w.jsxs)(i, {
          contentProps: T,
          open: !0,
          showDialogClose: !1,
          size: `xxxwideTall`,
          variant: `chatgpt`,
          onOpenChange: E,
          children: [D, A],
        })),
        (t[17] = E),
        (t[18] = D),
        (t[19] = A),
        (t[20] = j))
      : (j = t[20]),
    j
  );
}
var C, w;
function T() {
  return (T = e(() => {
    ((C = o()), t(), g(), u(), a(), c(), v(), b(), f(), (w = s()));
  }))();
}
T();
export { S as ChatGptSearchFilePreview };
//# sourceMappingURL=file-preview-191f6ac986f2.js.map
