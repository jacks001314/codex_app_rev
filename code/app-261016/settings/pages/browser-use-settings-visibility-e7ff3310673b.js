import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Ist as r,
  LNt as i,
  Lst as a,
  PBt as o,
  Qst as s,
  Vrt as c,
  ZSt as l,
  qrt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { Bpr as d, Cjr as f, Vpr as p, wjr as m, xjr as h } from "./app-initial-ad16eaadf81f.js";
import { n as g, t as _ } from "./browser-clear-browsing-data-dialog-view-b18a92733c1e.js";
function v(e) {
  let n = (0, y.c)(13),
    { browsingDataSettings: i, browsingHistory: a, onClose: o } = e,
    c = t(s),
    l;
  n[0] === c.queryClient
    ? (l = n[1])
    : ((l = async (e) => {
        await Promise.all([
          c.queryClient.invalidateQueries({ queryKey: [`browser-browsing-history`] }),
          ...(e.includes(`downloads`)
            ? [c.queryClient.invalidateQueries({ queryKey: [`browser-download-history`] })]
            : []),
        ]);
      }),
      (n[0] = c.queryClient),
      (n[1] = l));
  let d = l,
    f;
  n[2] === c
    ? (f = n[3])
    : ((f = (e) =>
        c
          .get(u)
          .danger(e, { errorAnalytics: { toastId: `browserClearBrowsingDataDialog.clearBrowsingData` } })),
      (n[2] = c),
      (n[3] = f));
  let p;
  n[4] !== i || n[5] !== a || n[6] !== d || n[7] !== o || n[8] !== f
    ? ((p = (0, b.jsx)(_, {
        browsingDataSettings: i,
        browsingHistory: a,
        onCleared: d,
        onClose: o,
        onError: f,
      })),
      (n[4] = i),
      (n[5] = a),
      (n[6] = d),
      (n[7] = o),
      (n[8] = f),
      (n[9] = p))
    : (p = n[9]);
  let m;
  return (
    n[10] !== c.queryClient || n[11] !== p
      ? ((m = (0, b.jsx)(r, { client: c.queryClient, children: p })),
        (n[10] = c.queryClient),
        (n[11] = p),
        (n[12] = m))
      : (m = n[12]),
    m
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = o()), a(), l(), c(), n(), g(), (b = i()));
  }))();
}
function S(e) {
  let t = (0, C.c)(11),
    { hostId: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = p(r),
    a = f(`2982604767`),
    o = m(`2982604767`),
    s = i.enabled && !i.isLoading,
    c;
  t[2] !== i.isLoading || t[3] !== s
    ? ((c = { enabled: s, isLoading: i.isLoading }), (t[2] = i.isLoading), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = c,
    u = l.enabled && a,
    d = i.isLoading || o,
    h;
  t[5] !== u || t[6] !== d
    ? ((h = { enabled: u, isLoading: d }), (t[5] = u), (t[6] = d), (t[7] = h))
    : (h = t[7]);
  let g;
  return (
    t[8] !== l || t[9] !== h
      ? ((g = {
          contactInfo: l,
          downloads: l,
          extensions: h,
          history: l,
          passwordManager: l,
          siteSettings: l,
        }),
        (t[8] = l),
        (t[9] = h),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
var C;
function w() {
  return (w = e(() => {
    ((C = o()), d(), h());
  }))();
}
export { x as i, S as n, v as r, w as t };
//# sourceMappingURL=browser-use-settings-visibility-e7ff3310673b.js.map
