import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  DG as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  TJ as s,
  VDt as c,
  hot as l,
  jDt as u,
  lot as d,
  nst as f,
  t3 as p,
  tst as m,
  vzt as h,
  wot as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
function y(e) {
  let o = (0, b.c)(13),
    { ref: s, deleted: u, imageAssetResolver: d, compact: p } = e,
    m = p !== void 0 && p,
    h = a(n),
    g = c(),
    _ = f(),
    [v, y] = (0, x.useState)(!1),
    C;
  o[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, S.jsx)(i, {
        id: `imagegen.deletedImage.card.title.unavailable`,
        defaultMessage: `Image unavailable`,
        description: `Title in a generated-image placeholder after the image was deleted from Library`,
      })),
      (o[0] = C))
    : (C = o[0]);
  let w = C,
    T;
  o[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, S.jsx)(r, { className: `text-tertiary` })), (o[1] = T))
    : (T = o[1]);
  let E;
  o[2] !== m || o[3] !== u || o[4] !== d || o[5] !== g || o[6] !== v || o[7] !== _ || o[8] !== h
    ? ((E = m
        ? (0, S.jsx)(`span`, { className: `sr-only`, children: w })
        : (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsxs)(`div`, {
                className: `flex flex-col gap-2 px-4`,
                children: [
                  (0, S.jsx)(`h3`, { className: `text-base font-semibold`, children: w }),
                  (0, S.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    children: (0, S.jsx)(i, {
                      id: `imagegen.deletedImage.card.body.deleted`,
                      defaultMessage: `This image was deleted`,
                      description: `Text in a generated-image placeholder explaining that the image was deleted from Library`,
                    }),
                  }),
                ],
              }),
              u.status === `trashed` && d?.restore != null
                ? (0, S.jsx)(t, {
                    color: `secondary`,
                    loading: v,
                    disabled: v,
                    onClick: () => {
                      v ||
                        (y(!0),
                        d
                          .restore?.(u.libraryFileId)
                          .then(() =>
                            Promise.all([
                              _.invalidateQueries({
                                queryKey: [`file`, `image-src`],
                                predicate: (e) => {
                                  let { queryKey: t } = e;
                                  return d.cacheKey.every((e, n) => t[n + 3] === e);
                                },
                              }),
                              _.invalidateQueries({ queryKey: [`library-api`] }),
                            ]),
                          )
                          .catch(() => {
                            h.get(l).danger(
                              g.formatMessage({
                                id: `imagegen.deletedImage.toast.restoreFailed`,
                                defaultMessage: `Unable to restore image`,
                                description: `Error toast after restoring a generated image from Library trash fails`,
                              }),
                              { errorAnalytics: { toastId: `imagegen.deletedImage.toast.restoreFailed` } },
                            );
                          })
                          .finally(() => {
                            y(!1);
                          }));
                    },
                    children: (0, S.jsx)(i, {
                      id: `imagegen.deletedImage.card.button.restore`,
                      defaultMessage: `Restore from Trash`,
                      description: `Button in a generated-image placeholder that restores the image from Library trash`,
                    }),
                  })
                : null,
            ],
          })),
      (o[2] = m),
      (o[3] = u),
      (o[4] = d),
      (o[5] = g),
      (o[6] = v),
      (o[7] = _),
      (o[8] = h),
      (o[9] = E))
    : (E = o[9]);
  let D;
  return (
    o[10] !== s || o[11] !== E
      ? ((D = (0, S.jsxs)(`div`, {
          ref: s,
          className: `flex size-full flex-col items-center justify-center gap-4 rounded-2xl bg-callout-surface text-center select-none`,
          role: `status`,
          children: [T, E],
        })),
        (o[10] = s),
        (o[11] = E),
        (o[12] = D))
      : (D = o[12]),
    D
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = h()), m(), o(), (x = v()), u(), p(), s(), d(), g(), (S = _()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=deleted-image-placeholder-303f4bbcbf13.js.map
