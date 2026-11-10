import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $St as t, FBt as n, HM as r, PBt as i, ZSt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  Bjn as o,
  CR as s,
  Iwn as c,
  MOr as l,
  SR as u,
  Ujn as d,
  icr as f,
  qjn as p,
  zOr as m,
} from "./app-initial-ad16eaadf81f.js";
import { $c as h, tl as g } from "./app-primary-3e00728c2a4c.js";
function _(e) {
  let n = (0, v.c)(4),
    { pending: r } = e,
    i = t(l),
    a,
    c;
  return (
    n[0] !== r || n[1] !== i
      ? ((a = () => {
          let e = r.url;
          if (e == null) return;
          let t = !1;
          return i.watch((n) => {
            t ||
              n.get(g) !== r ||
              (n.value.routeKind === `home` && n.get(o) !== `disabled`) ||
              (n.value.routeKind === `chatgpt-thread` && n.get(d, n.value.conversationId)) ||
              ((t = s(
                n,
                { type: `appgen-app`, projectId: r.projectId, title: r.title, url: e },
                void 0,
                !0,
                void 0,
                r.showComposer === !0 ? `full-width` : `split`,
                r.showComposer,
              )),
              t && n.get(g) === r && n.set(g, null));
          });
        }),
        (c = [r, i]),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a),
        (n[3] = c))
      : ((a = n[2]), (c = n[3])),
    (0, y.useEffect)(a, c),
    null
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = i()), a(), (y = n()), p(), c(), r(), m(), u(), f(), h());
  }))();
}
b();
export { _ as OpenPendingSitePreview };
//# sourceMappingURL=open-pending-site-preview-659622b526e5.js.map
