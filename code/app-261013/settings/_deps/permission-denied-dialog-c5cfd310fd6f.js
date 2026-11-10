import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  _O as n,
  cO as r,
  fO as i,
  gO as a,
  jDt as o,
  lO as s,
  mO as c,
  oO as l,
  vO as u,
  vzt as d,
  xMt as f,
} from "./app-shared-bbfeca5e5737.js";
function p(e) {
  let i = (0, m.c)(6),
    { onClose: o } = e,
    u;
  i[0] === o
    ? (u = i[1])
    : ((u = (e) => {
        e || o();
      }),
      (i[0] = o),
      (i[1] = u));
  let d;
  i[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, h.jsx)(n, {
        children: (0, h.jsx)(t, {
          id: `chatgptConversations.preciseLocation.permissionDenied.title`,
          defaultMessage: `Turn on location access`,
          description: `Title of a dialog shown after ChatGPT cannot get precise location because browser permission was already blocked. It asks the user to enable this site's Location permission in their browser. Keep this headline concise.`,
        }),
      })),
      (i[2] = d))
    : (d = i[2]);
  let f;
  i[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, h.jsx)(l, {
        children: (0, h.jsx)(s, {
          children: (0, h.jsx)(r, {
            className: `select-none`,
            title: d,
            subtitle: (0, h.jsx)(a, {
              children: (0, h.jsx)(t, {
                id: `chatgptConversations.preciseLocation.permissionDenied.description`,
                defaultMessage: `Open your browser's site settings from the icon beside the address bar, set Location to Allow, then refresh the page`,
                description: `Instructions in a ChatGPT dialog shown when browser location permission was already blocked. Explain how to enable this site's Location permission using the browser's site-controls icon, then reload ChatGPT. This is plain text with no interactive link or placeholders.`,
              }),
            }),
          }),
        }),
      })),
      (i[3] = f))
    : (f = i[3]);
  let p;
  return (
    i[4] === u
      ? (p = i[5])
      : ((p = (0, h.jsx)(c, { open: !0, size: `compact`, onOpenChange: u, children: f })),
        (i[4] = u),
        (i[5] = p)),
    p
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = d()), o(), u(), i(), (h = f()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=permission-denied-dialog-c5cfd310fd6f.js.map
