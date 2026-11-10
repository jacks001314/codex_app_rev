import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _O as r,
  aj as i,
  cO as a,
  fO as o,
  jDt as s,
  lO as c,
  mO as l,
  oO as u,
  oj as d,
  sO as f,
  t3 as p,
  vO as m,
  vzt as h,
  xMt as g,
} from "./app-shared-bbfeca5e5737.js";
import { Bs as _, zs as v } from "./app-initial-5851df3f6cb1.js";
function y(e) {
  let i = (0, x.c)(13),
    { image: o, onClose: s, onCloseAutoFocus: p, onOpenAutoFocus: m } = e,
    h;
  i[0] === s ? (h = i[1]) : ((h = (e) => !e && s()), (i[0] = s), (i[1] = h));
  let g;
  i[2] !== o || i[3] !== m
    ? ((g = (e) => {
        (d(o.imageRef)(null), m?.(e));
      }),
      (i[2] = o),
      (i[3] = m),
      (i[4] = g))
    : (g = i[4]);
  let _;
  i[5] !== p || i[6] !== g
    ? ((_ = { onCloseAutoFocus: p, onOpenAutoFocus: g }), (i[5] = p), (i[6] = g), (i[7] = _))
    : (_ = i[7]);
  let v;
  i[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, S.jsx)(c, {
        children: (0, S.jsx)(a, {
          title: (0, S.jsx)(r, {
            children: (0, S.jsx)(n, {
              id: `codex.imagePreview.loadError.title`,
              defaultMessage: `Couldn’t open image preview`,
              description: `Title of the recovery dialog shown when the image preview interface fails to download. The user can close it or reload the app.`,
            }),
          }),
        }),
      })),
      (i[8] = v))
    : (v = i[8]);
  let y;
  i[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, S.jsxs)(u, {
        children: [
          v,
          (0, S.jsx)(f, {
            children: (0, S.jsx)(t, {
              onClick: b,
              children: (0, S.jsx)(n, {
                id: `codex.imagePreview.loadError.reload`,
                defaultMessage: `Reload`,
                description: `Button in the image preview load error dialog that saves pending drafts and reloads the app so the user can open the image again.`,
              }),
            }),
          }),
        ],
      })),
      (i[9] = y))
    : (y = i[9]);
  let C;
  return (
    i[10] !== h || i[11] !== _
      ? ((C = (0, S.jsx)(l, { open: !0, size: `compact`, onOpenChange: h, contentProps: _, children: y })),
        (i[10] = h),
        (i[11] = _),
        (i[12] = C))
      : (C = i[12]),
    C
  );
}
function b() {
  _();
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = h()), s(), p(), m(), o(), v(), i(), (S = g()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=overlay-load-error-122a43c5afad.js.map
