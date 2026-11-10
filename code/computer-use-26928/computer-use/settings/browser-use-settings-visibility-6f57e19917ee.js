import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  FJt as n,
  IJt as r,
  O5t as i,
  _dn as a,
  cMt as o,
  dJt as s,
  dMt as c,
  eG as l,
  fJt as u,
  gPt as d,
  lPt as f,
  mcn as p,
  tG as m,
  uMt as h,
} from "./app-shared-7552fc8d5d82.js";
import { n as g, t as _ } from "./browser-clear-browsing-data-dialog-view-26541e3e543b.js";
function v(e) {
  let r = (0, y.c)(13),
    { browsingDataSettings: i, browsingHistory: a, onClose: o } = e,
    c = t(s),
    l;
  r[0] === c.queryClient
    ? (l = r[1])
    : ((l = async (e) => {
        await Promise.all([
          c.queryClient.invalidateQueries({ queryKey: [`browser-browsing-history`] }),
          ...(e.includes(`downloads`)
            ? [c.queryClient.invalidateQueries({ queryKey: [`browser-download-history`] })]
            : []),
        ]);
      }),
      (r[0] = c.queryClient),
      (r[1] = l));
  let u = l,
    f;
  r[2] === c
    ? (f = r[3])
    : ((f = (e) =>
        c
          .get(d)
          .danger(e, {
            errorAnalytics: { toastId: `browserClearBrowsingDataDialog.clearBrowsingData` },
          })),
      (r[2] = c),
      (r[3] = f));
  let p;
  r[4] !== i || r[5] !== a || r[6] !== u || r[7] !== o || r[8] !== f
    ? ((p = (0, b.jsx)(_, {
        browsingDataSettings: i,
        browsingHistory: a,
        onCleared: u,
        onClose: o,
        onError: f,
      })),
      (r[4] = i),
      (r[5] = a),
      (r[6] = u),
      (r[7] = o),
      (r[8] = f),
      (r[9] = p))
    : (p = r[9]);
  let m;
  return (
    r[10] !== c.queryClient || r[11] !== p
      ? ((m = (0, b.jsx)(n, { client: c.queryClient, children: p })),
        (r[10] = c.queryClient),
        (r[11] = p),
        (r[12] = m))
      : (m = r[12]),
    m
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = a()), r(), i(), f(), u(), g(), (b = p()));
  }))();
}
function S(e) {
  let t = (0, C.c)(11),
    { hostId: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = m(r),
    a = h(`2982604767`),
    o = c(`2982604767`),
    s = i.enabled && !i.isLoading,
    l;
  t[2] !== i.isLoading || t[3] !== s
    ? ((l = { enabled: s, isLoading: i.isLoading }), (t[2] = i.isLoading), (t[3] = s), (t[4] = l))
    : (l = t[4]);
  let u = l,
    d = u.enabled && a,
    f = i.isLoading || o,
    p;
  t[5] !== d || t[6] !== f
    ? ((p = { enabled: d, isLoading: f }), (t[5] = d), (t[6] = f), (t[7] = p))
    : (p = t[7]);
  let g;
  return (
    t[8] !== u || t[9] !== p
      ? ((g = {
          contactInfo: u,
          downloads: u,
          extensions: p,
          history: u,
          passwordManager: u,
          siteSettings: u,
        }),
        (t[8] = u),
        (t[9] = p),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
var C;
function w() {
  return (w = e(() => {
    ((C = a()), l(), o());
  }))();
}
export { x as i, S as n, v as r, w as t };
//# sourceMappingURL=browser-use-settings-visibility-6f57e19917ee.js.map
