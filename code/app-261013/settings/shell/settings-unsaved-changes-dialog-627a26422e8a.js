import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _O as r,
  cO as i,
  fO as a,
  gO as o,
  jDt as s,
  lO as c,
  mO as l,
  oO as u,
  sO as d,
  t3 as f,
  vO as p,
  vzt as m,
  xMt as h,
} from "./app-shared-bbfeca5e5737.js";
function g(e) {
  let a = (0, _.c)(20),
    { pendingNavigation: s, onClearPendingNavigation: f } = e,
    p = s != null,
    m;
  a[0] === f
    ? (m = a[1])
    : ((m = (e) => {
        e || f();
      }),
      (a[0] = f),
      (a[1] = m));
  let h;
  a[2] !== f || a[3] !== s
    ? ((h = (e) => {
        e.preventDefault();
        let t = s;
        (f(), t?.());
      }),
      (a[2] = f),
      (a[3] = s),
      (a[4] = h))
    : (h = a[4]);
  let g;
  a[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, v.jsx)(r, {
        children: (0, v.jsx)(n, {
          id: `settings.unsavedChanges.discardTitle`,
          defaultMessage: `Discard changes?`,
          description: `Title for the confirmation dialog shown before leaving Settings with unsaved changes`,
        }),
      })),
      (a[5] = g))
    : (g = a[5]);
  let y;
  a[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, v.jsx)(c, {
        children: (0, v.jsx)(i, {
          title: g,
          subtitle: (0, v.jsx)(o, {
            children: (0, v.jsx)(n, {
              id: `settings.unsavedChanges.discardDescription`,
              defaultMessage: `You have unsaved changes. If you leave now, your changes will be lost.`,
              description: `Description for the confirmation dialog shown before leaving Settings with unsaved changes`,
            }),
          }),
        }),
      })),
      (a[6] = y))
    : (y = a[6]);
  let b;
  a[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, v.jsx)(n, {
        id: `settings.unsavedChanges.keepEditing`,
        defaultMessage: `Keep editing`,
        description: `Button label for returning to Settings instead of discarding unsaved changes`,
      })),
      (a[7] = b))
    : (b = a[7]);
  let x;
  a[8] === f
    ? (x = a[9])
    : ((x = (0, v.jsx)(t, { color: `secondary`, type: `button`, onClick: f, children: b })),
      (a[8] = f),
      (a[9] = x));
  let S;
  a[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, v.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, v.jsx)(n, {
          id: `settings.unsavedChanges.discard`,
          defaultMessage: `Discard changes`,
          description: `Button label for discarding unsaved Settings changes`,
        }),
      })),
      (a[10] = S))
    : (S = a[10]);
  let C;
  a[11] === x
    ? (C = a[12])
    : ((C = (0, v.jsx)(c, { children: (0, v.jsxs)(d, { children: [x, S] }) })), (a[11] = x), (a[12] = C));
  let w;
  a[13] !== h || a[14] !== C
    ? ((w = (0, v.jsxs)(u, { as: `form`, onSubmit: h, children: [y, C] })),
      (a[13] = h),
      (a[14] = C),
      (a[15] = w))
    : (w = a[15]);
  let T;
  return (
    a[16] !== p || a[17] !== w || a[18] !== m
      ? ((T = (0, v.jsx)(l, { open: p, showDialogClose: !1, size: `compact`, onOpenChange: m, children: w })),
        (a[16] = p),
        (a[17] = w),
        (a[18] = m),
        (a[19] = T))
      : (T = a[19]),
    T
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = m()), s(), f(), p(), a(), (v = h()));
  }))();
}
export { y as n, g as t };
//# sourceMappingURL=settings-unsaved-changes-dialog-627a26422e8a.js.map
