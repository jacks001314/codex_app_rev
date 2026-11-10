const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./app-connect-modal-content-df0818a19c98.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./client-77d175e61121.js",
      "./app-connect-mfa-continuation-e50c4da2add7.js",
      "./app-connect-load-state-80040a1f57f3.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./app-connect-queries-f7767476a146.js",
      "./microsoft-oauth-bundle-ca8e0d4a5995.js",
      "./select-4c14bfc522da.js",
      "./select-control-661f8ec490d1.js",
      "./select-control-1bcf227d3465.css",
      "./select-c443f552004f.css",
      "./app-connect-disclosure-6972271b30c4.js",
      "./background-df2d0f0d3c80.js",
      "./google-logo-79cb9d2ee553.js",
      "./country-codes-1c845666fc28.js",
      "./run-2c4dc0470961.js",
      "./app-google-drive-afa1bb8bd414.js",
      "./app-connect-modal-content-8102d824cf6b.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  I3 as r,
  LNt as i,
  OFt as a,
  PBt as o,
  XOt as s,
  kFt as c,
  tkt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { Xzt as u, Yzt as d } from "./app-initial-ad16eaadf81f.js";
import { n as f, t as p } from "./app-connect-skeleton-990edda9425c.js";
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
    { app: n, connectorId: r, onOpenChange: i, onUserDismissed: a, failed: o, embedded: s } = e,
    c = o !== void 0 && o,
    u = n != null || r != null,
    f;
  t[0] !== i || t[1] !== a
    ? ((f = (e) => {
        (e || a?.(), i(e));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = f))
    : (f = t[2]);
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, y.jsx)(l, {
        id: `appConnectModal.loadError`,
        defaultMessage: `Couldn’t open app connection`,
        description: `Title when downloading the app connection dialog fails after retrying`,
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] !== s || t[5] !== c
    ? ((h = c ? null : (0, y.jsx)(p, { embedded: s })), (t[4] = s), (t[5] = c), (t[6] = h))
    : (h = t[6]);
  let g;
  return (
    t[7] !== s || t[8] !== c || t[9] !== u || t[10] !== f || t[11] !== h
      ? ((g = (0, y.jsx)(d, {
          open: u,
          size: `setup`,
          onOpenChange: f,
          failed: c,
          embedded: s,
          title: m,
          children: h,
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = u),
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
      (v = n()),
      s(),
      f(),
      u(),
      t(),
      (y = i()),
      c(),
      (b = r(
        async () =>
          (
            await a(
              async () => {
                let { AppConnectModal: e } = await import(`./app-connect-modal-content-df0818a19c98.js`);
                return { AppConnectModal: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ]),
              import.meta.url,
            )
          ).AppConnectModal,
        { suspendToParent: !0, errorFallback: (e) => (0, y.jsx)(g, { ...e, failed: !0 }) },
      )));
  }))();
}
export { x as n, m as r, h as t };
//# sourceMappingURL=app-connect-modal-763ad0733e86.js.map
