const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./app-connect-modal-content-861e8a25732b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./client-4ded20a1a3e9.js",
      "./app-connect-mfa-continuation-74487b9e9324.js",
      "./app-connect-load-state-bbeb24b226fa.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
      "./background-b4c0c6f8f01e.js",
      "./google-logo-78f7c5d82eb0.js",
      "./country-codes-1c845666fc28.js",
      "./run-9420c7500fe0.js",
      "./app-google-drive-269c2cb9e4d1.js",
      "./app-connect-modal-content-8102d824cf6b.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  IDt as n,
  fPt as r,
  jDt as i,
  pPt as a,
  vzt as o,
  xMt as s,
  yzt as c,
  z4 as l,
} from "./app-shared-bbfeca5e5737.js";
import { MWt as u, NWt as d } from "./app-initial-5851df3f6cb1.js";
import { n as f, t as p } from "./app-connect-skeleton-ca153a13f650.js";
function m() {
  return b.prefetch();
}
function h(e) {
  let t = (0, _.c)(3),
    n = e.app != null || e.connectorId != null,
    [r, i] = (0, v.useState)(n);
  n && !r && i(!0);
  let a;
  return (
    t[0] !== r || t[1] !== e
      ? ((a = r
          ? (0, y.jsx)(v.Suspense, {
              fallback: e.showLoadingDialog === !1 ? null : (0, y.jsx)(g, { ...e }),
              children: (0, y.jsx)(b, { ...e }),
            })
          : null),
        (t[0] = r),
        (t[1] = e),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function g(e) {
  let t = (0, _.c)(13),
    { app: r, connectorId: i, onOpenChange: a, onUserDismissed: o, failed: s, embedded: c } = e,
    l = s !== void 0 && s,
    d = r != null || i != null,
    f;
  t[0] !== a || t[1] !== o
    ? ((f = (e) => {
        (e || o?.(), a(e));
      }),
      (t[0] = a),
      (t[1] = o),
      (t[2] = f))
    : (f = t[2]);
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, y.jsx)(n, {
        id: `appConnectModal.loadError`,
        defaultMessage: `Couldn’t open app connection`,
        description: `Title when downloading the app connection dialog fails after retrying`,
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] !== c || t[5] !== l
    ? ((h = l ? null : (0, y.jsx)(p, { embedded: c })), (t[4] = c), (t[5] = l), (t[6] = h))
    : (h = t[6]);
  let g;
  return (
    t[7] !== c || t[8] !== l || t[9] !== d || t[10] !== f || t[11] !== h
      ? ((g = (0, y.jsx)(u, {
          open: d,
          size: `setup`,
          onOpenChange: f,
          failed: l,
          embedded: c,
          title: m,
          children: h,
        })),
        (t[7] = c),
        (t[8] = l),
        (t[9] = d),
        (t[10] = f),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
var _, v, y, b;
function x() {
  return (x = e(() => {
    ((_ = o()),
      (v = c()),
      i(),
      f(),
      d(),
      l(),
      (y = s()),
      a(),
      (b = t(
        async () =>
          (
            await r(
              async () => {
                let { AppConnectModal: e } = await import(`./app-connect-modal-content-861e8a25732b.js`);
                return { AppConnectModal: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
              import.meta.url,
            )
          ).AppConnectModal,
        { suspendToParent: !0, errorFallback: (e) => (0, y.jsx)(g, { ...e, failed: !0 }) },
      )));
  }))();
}
export { x as n, m as r, h as t };
//# sourceMappingURL=app-connect-modal-fb7e1b0124f4.js.map
