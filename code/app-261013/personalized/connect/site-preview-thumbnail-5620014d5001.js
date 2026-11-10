import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, aSt as n, vzt as r, xMt as i, zxt as a } from "./app-shared-bbfeca5e5737.js";
import {
  $hn as o,
  _z as s,
  cnr as c,
  cyn as l,
  gz as u,
  iI as d,
  lyn as f,
  oI as p,
  ugn as m,
  unr as h,
  ygn as g,
} from "./app-initial-5851df3f6cb1.js";
function _(e) {
  let t = (0, v.c)(16),
    { resource: n, icon: r, title: i } = e,
    o = a(b, n.projectId);
  if (o == null) return null;
  let s, l, f, p;
  if (t[0] !== r || t[1] !== n || t[2] !== o.liveUrl || t[3] !== i) {
    let e = c(n, o.liveUrl);
    ((s = u),
      (l = r),
      (f = i),
      (p = d(e.url)),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o.liveUrl),
      (t[3] = i),
      (t[4] = s),
      (t[5] = l),
      (t[6] = f),
      (t[7] = p));
  } else ((s = t[4]), (l = t[5]), (f = t[6]), (p = t[7]));
  let m;
  t[8] === o.screenshot
    ? (m = t[9])
    : ((m = [{ kind: `image`, src: o.screenshot, fit: `cover` }]), (t[8] = o.screenshot), (t[9] = m));
  let h;
  return (
    t[10] !== s || t[11] !== l || t[12] !== f || t[13] !== p || t[14] !== m
      ? ((h = (0, y.jsx)(s, { icon: l, title: f, subtitle: p, sections: m })),
        (t[10] = s),
        (t[11] = l),
        (t[12] = f),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h))
      : (h = t[15]),
    h
  );
}
var v, y, b;
function x() {
  return (x = e(() => {
    ((v = r()),
      t(),
      s(),
      f(),
      h(),
      g(),
      p(),
      (y = i()),
      (b = n(l, (e, { scope: t }) => {
        let n = t.query.getData(m, e),
          r = n?.screenshot_url == null ? void 0 : t.queryClient.getQueryData([...o, n.screenshot_url]);
        return r == null ? null : { screenshot: r, liveUrl: n?.current_live_url };
      })));
  }))();
}
x();
export { _ as SitePreviewThumbnail };
//# sourceMappingURL=site-preview-thumbnail-5620014d5001.js.map
