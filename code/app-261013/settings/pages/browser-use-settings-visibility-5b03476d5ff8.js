import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  est as i,
  hot as a,
  lot as o,
  tst as s,
  vzt as c,
  wot as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { Qlr as d, Zlr as f, eDr as p, nDr as m, rDr as h } from "./app-initial-5851df3f6cb1.js";
import { n as g, t as _ } from "./browser-clear-browsing-data-dialog-view-380dcf867bd3.js";
function v(e) {
  let r = (0, y.c)(13),
    { browsingDataSettings: o, browsingHistory: s, onClose: c } = e,
    l = n(t),
    u;
  r[0] === l.queryClient
    ? (u = r[1])
    : ((u = async (e) => {
        await Promise.all([
          l.queryClient.invalidateQueries({ queryKey: [`browser-browsing-history`] }),
          ...(e.includes(`downloads`)
            ? [l.queryClient.invalidateQueries({ queryKey: [`browser-download-history`] })]
            : []),
        ]);
      }),
      (r[0] = l.queryClient),
      (r[1] = u));
  let d = u,
    f;
  r[2] === l
    ? (f = r[3])
    : ((f = (e) =>
        l
          .get(a)
          .danger(e, { errorAnalytics: { toastId: `browserClearBrowsingDataDialog.clearBrowsingData` } })),
      (r[2] = l),
      (r[3] = f));
  let p;
  r[4] !== o || r[5] !== s || r[6] !== d || r[7] !== c || r[8] !== f
    ? ((p = (0, b.jsx)(_, {
        browsingDataSettings: o,
        browsingHistory: s,
        onCleared: d,
        onClose: c,
        onError: f,
      })),
      (r[4] = o),
      (r[5] = s),
      (r[6] = d),
      (r[7] = c),
      (r[8] = f),
      (r[9] = p))
    : (p = r[9]);
  let m;
  return (
    r[10] !== l.queryClient || r[11] !== p
      ? ((m = (0, b.jsx)(i, { client: l.queryClient, children: p })),
        (r[10] = l.queryClient),
        (r[11] = p),
        (r[12] = m))
      : (m = r[12]),
    m
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = c()), s(), r(), o(), l(), g(), (b = u()));
  }))();
}
function S(e) {
  let t = (0, C.c)(11),
    { hostId: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = { featureName: `in_app_browser`, hostId: n }), (t[0] = n), (t[1] = r));
  let i = d(r),
    a = m(`2982604767`),
    o = h(`2982604767`),
    s = i.enabled && !i.isLoading,
    c;
  t[2] !== i.isLoading || t[3] !== s
    ? ((c = { enabled: s, isLoading: i.isLoading }), (t[2] = i.isLoading), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = c,
    u = l.enabled && a,
    f = i.isLoading || o,
    p;
  t[5] !== u || t[6] !== f
    ? ((p = { enabled: u, isLoading: f }), (t[5] = u), (t[6] = f), (t[7] = p))
    : (p = t[7]);
  let g;
  return (
    t[8] !== l || t[9] !== p
      ? ((g = {
          contactInfo: l,
          downloads: l,
          extensions: p,
          history: l,
          passwordManager: l,
          siteSettings: l,
        }),
        (t[8] = l),
        (t[9] = p),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
var C;
function w() {
  return (w = e(() => {
    ((C = c()), f(), p());
  }))();
}
export { x as i, S as n, v as r, w as t };
//# sourceMappingURL=browser-use-settings-visibility-5b03476d5ff8.js.map
