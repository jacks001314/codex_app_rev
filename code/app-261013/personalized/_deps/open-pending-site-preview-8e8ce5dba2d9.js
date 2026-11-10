import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, vzt as r, yzt as i } from "./app-shared-bbfeca5e5737.js";
import {
  BL as a,
  Cwr as o,
  I3n as s,
  _On as c,
  bOn as l,
  dwn as u,
  gwr as d,
  hwn as f,
  w3n as p,
  wOn as m,
  zL as h,
} from "./app-initial-5851df3f6cb1.js";
import { n as g, t as _ } from "./site-preview-request-a63df11a6b69.js";
function v(e) {
  let n = (0, y.c)(4),
    { pending: r } = e,
    i = t(d),
    o,
    s;
  return (
    n[0] !== r || n[1] !== i
      ? ((o = () => {
          let e = r.url;
          if (e == null) return;
          let t = !1;
          return i.watch((n) => {
            if (!(
              t ||
              n.get(g) !== r ||
              (n.value.routeKind === `home` && n.get(c) !== `disabled`) ||
              (n.value.routeKind === `chatgpt-thread` && n.get(l, n.value.conversationId))
            )) {
              if (n.get(p) && n.get(f.activeTab$)?.tabId === `site-preview:${r.projectId}`) {
                ((t = !0), n.set(g, null));
                return;
              }
              ((t = a(n, { type: `appgen-app`, projectId: r.projectId, title: r.title, url: e })),
                t && n.set(g, null));
            }
          });
        }),
        (s = [r, i]),
        (n[0] = r),
        (n[1] = i),
        (n[2] = o),
        (n[3] = s))
      : ((o = n[2]), (s = n[3])),
    (0, b.useEffect)(o, s),
    null
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = r()), n(), (b = i()), u(), s(), m(), o(), h(), _());
  }))();
}
x();
export { v as OpenPendingSitePreview };
//# sourceMappingURL=open-pending-site-preview-8e8ce5dba2d9.js.map
