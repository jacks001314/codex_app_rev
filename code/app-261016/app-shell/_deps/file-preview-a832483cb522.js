import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  JO as t,
  LNt as n,
  PBt as r,
  WO as i,
  ZSt as a,
  iCt as o,
  qO as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as c,
  CLr as l,
  GK as u,
  IMr as d,
  WK as f,
  fS as p,
  mS as m,
  nMr as h,
  wLr as g,
  zRr as _,
} from "./app-initial-ad16eaadf81f.js";
import { i as v, r as y } from "./library-file-preview-kind-83a79c3eedc6.js";
import { n as b, t as x } from "./cloud-file-preview.electron-1bf94bd57c97.js";
function S(e) {
  "use forget";
  let t = (0, C.c)(21),
    { accountId: n, authenticatedAccountId: r, canFavorite: a, file: u, userId: m, onClose: h } = e,
    g = o(d),
    v = o(_),
    b = o(c),
    S = o(l);
  if (g !== n || v !== r || b !== m || !S) return null;
  let T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { "aria-describedby": void 0 }), (t[0] = T))
    : (T = t[0]);
  let E;
  t[1] === h
    ? (E = t[2])
    : ((E = (e) => {
        e || h();
      }),
      (t[1] = h),
      (t[2] = E));
  let D;
  t[3] === u.name
    ? (D = t[4])
    : ((D = (0, w.jsx)(s, { className: `sr-only`, children: u.name })), (t[3] = u.name), (t[4] = D));
  let O;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { pathname: `/library`, routeKind: `other`, routeTemplate: `/library` }), (t[5] = O))
    : (O = t[5]);
  let k;
  t[6] !== a || t[7] !== u.category || t[8] !== u.id || t[9] !== u.mimeType || t[10] !== u.name || t[11] !== h
    ? ((k = () =>
        a
          ? (0, w.jsx)(p, {
              libraryFileId: u.id,
              surface:
                y({ file_name: u.name, library_file_category: u.category, mime_type: u.mimeType }) === `image`
                  ? `image_lightbox`
                  : `file_preview`,
              onView: h,
            })
          : void 0),
      (t[6] = a),
      (t[7] = u.category),
      (t[8] = u.id),
      (t[9] = u.mimeType),
      (t[10] = u.name),
      (t[11] = h),
      (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] !== u || t[14] !== h || t[15] !== k
    ? ((A = (0, w.jsx)(f, {
        route: O,
        children: (0, w.jsx)(x, {
          file: u,
          openTarget: `external-browser`,
          onClose: h,
          renderFavoriteAction: k,
        }),
      })),
      (t[13] = u),
      (t[14] = h),
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
    ((C = r()), a(), g(), h(), t(), m(), v(), b(), u(), (w = n()));
  }))();
}
T();
export { S as ChatGptSearchFilePreview };
//# sourceMappingURL=file-preview-a832483cb522.js.map
