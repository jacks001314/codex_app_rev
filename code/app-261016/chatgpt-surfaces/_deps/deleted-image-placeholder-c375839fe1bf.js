import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  Lst as a,
  PBt as o,
  Qst as s,
  Rst as c,
  TY as l,
  Vrt as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  okt as h,
  qrt as g,
  tkt as _,
  wK as v,
} from "./app-shared-2feb3d4c6fcc.js";
function y(e) {
  let n = (0, b.c)(13),
    { ref: r, deleted: i, imageAssetResolver: a, compact: o } = e,
    l = o !== void 0 && o,
    u = t(s),
    d = h(),
    p = c(),
    [m, y] = (0, x.useState)(!1),
    C;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, S.jsx)(_, {
        id: `imagegen.deletedImage.card.title.unavailable`,
        defaultMessage: `Image unavailable`,
        description: `Title in a generated-image placeholder after the image was deleted from Library`,
      })),
      (n[0] = C))
    : (C = n[0]);
  let w = C,
    T;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, S.jsx)(v, { className: `text-tertiary` })), (n[1] = T))
    : (T = n[1]);
  let E;
  n[2] !== l || n[3] !== i || n[4] !== a || n[5] !== d || n[6] !== m || n[7] !== p || n[8] !== u
    ? ((E = l
        ? (0, S.jsx)(`span`, { className: `sr-only`, children: w })
        : (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsxs)(`div`, {
                className: `flex flex-col gap-2 px-4`,
                children: [
                  (0, S.jsx)(`h3`, { className: `text-base font-semibold`, children: w }),
                  (0, S.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    children: (0, S.jsx)(_, {
                      id: `imagegen.deletedImage.card.body.deleted`,
                      defaultMessage: `This image was deleted`,
                      description: `Text in a generated-image placeholder explaining that the image was deleted from Library`,
                    }),
                  }),
                ],
              }),
              i.status === `trashed` && a?.restore != null
                ? (0, S.jsx)(f, {
                    color: `secondary`,
                    loading: m,
                    disabled: m,
                    onClick: () => {
                      m ||
                        (y(!0),
                        a
                          .restore?.(i.libraryFileId)
                          .then(() =>
                            Promise.all([
                              p.invalidateQueries({
                                queryKey: [`file`, `image-src`],
                                predicate: (e) => {
                                  let { queryKey: t } = e;
                                  return a.cacheKey.every((e, n) => t[n + 3] === e);
                                },
                              }),
                              p.invalidateQueries({ queryKey: [`library-api`] }),
                            ]),
                          )
                          .catch(() => {
                            u.get(g).danger(
                              d.formatMessage({
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
                    children: (0, S.jsx)(_, {
                      id: `imagegen.deletedImage.card.button.restore`,
                      defaultMessage: `Restore from Trash`,
                      description: `Button in a generated-image placeholder that restores the image from Library trash`,
                    }),
                  })
                : null,
            ],
          })),
      (n[2] = l),
      (n[3] = i),
      (n[4] = a),
      (n[5] = d),
      (n[6] = m),
      (n[7] = p),
      (n[8] = u),
      (n[9] = E))
    : (E = n[9]);
  let D;
  return (
    n[10] !== r || n[11] !== E
      ? ((D = (0, S.jsxs)(`div`, {
          ref: r,
          className: `flex size-full flex-col items-center justify-center gap-4 rounded-2xl bg-callout-surface text-center select-none`,
          role: `status`,
          children: [T, E],
        })),
        (n[10] = r),
        (n[11] = E),
        (n[12] = D))
      : (D = n[12]),
    D
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = o()), a(), m(), (x = r()), d(), p(), l(), u(), n(), (S = i()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=deleted-image-placeholder-c375839fe1bf.js.map
