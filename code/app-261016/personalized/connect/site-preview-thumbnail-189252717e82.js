import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, SCt as r, ZSt as i, nCt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  Avn as o,
  Far as s,
  Nar as c,
  UI as l,
  VI as u,
  _B as d,
  mSn as f,
  pSn as p,
  vB as m,
  yvn as h,
  zvn as g,
} from "./app-initial-ad16eaadf81f.js";
function _(e) {
  let t = (0, v.c)(16),
    { resource: n, icon: r, title: i } = e,
    o = a(b, n.projectId);
  if (o == null) return null;
  let s, l, f, p;
  if (t[0] !== r || t[1] !== n || t[2] !== o.liveUrl || t[3] !== i) {
    let e = c(n, o.liveUrl);
    ((s = d),
      (l = r),
      (f = i),
      (p = u(e.url)),
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
    ((v = n()),
      i(),
      m(),
      f(),
      s(),
      g(),
      l(),
      (y = t()),
      (b = r(p, (e, { scope: t }) => {
        let n = t.query.getData(o, e),
          r = n?.screenshot_url == null ? void 0 : t.queryClient.getQueryData([...h, n.screenshot_url]);
        return r == null ? null : { screenshot: r, liveUrl: n?.current_live_url };
      })));
  }))();
}
x();
export { _ as SitePreviewThumbnail };
//# sourceMappingURL=site-preview-thumbnail-189252717e82.js.map
