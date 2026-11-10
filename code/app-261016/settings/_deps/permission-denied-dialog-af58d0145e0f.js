import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  KO as i,
  LNt as a,
  PBt as o,
  RO as s,
  WO as c,
  XOt as l,
  qO as u,
  tkt as d,
  zO as f,
} from "./app-shared-2feb3d4c6fcc.js";
function p(e) {
  let t = (0, m.c)(6),
    { onClose: r } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, h.jsx)(u, {
        children: (0, h.jsx)(d, {
          id: `chatgptConversations.preciseLocation.permissionDenied.title`,
          defaultMessage: `Turn on location access`,
          description: `Title of a dialog shown after ChatGPT cannot get precise location because browser permission was already blocked. It asks the user to enable this site's Location permission in their browser. Keep this headline concise.`,
        }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, h.jsx)(n, {
        children: (0, h.jsx)(f, {
          children: (0, h.jsx)(s, {
            className: `select-none`,
            title: o,
            subtitle: (0, h.jsx)(i, {
              children: (0, h.jsx)(d, {
                id: `chatgptConversations.preciseLocation.permissionDenied.description`,
                defaultMessage: `Open your browser's site settings from the icon beside the address bar and set Location to Allow. Also allow location access for your browser or app in your device's privacy settings, then refresh the page.`,
                description: `Instructions after location permission was blocked. Both the site's browser permission and the browser or app's device-level location permission must be allowed. This is plain text with no interactive link or placeholders.`,
              }),
            }),
          }),
        }),
      })),
      (t[3] = l))
    : (l = t[3]);
  let p;
  return (
    t[4] === a
      ? (p = t[5])
      : ((p = (0, h.jsx)(c, { open: !0, size: `compact`, onOpenChange: a, children: l })),
        (t[4] = a),
        (t[5] = p)),
    p
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = o()), l(), r(), t(), (h = a()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=permission-denied-dialog-af58d0145e0f.js.map
