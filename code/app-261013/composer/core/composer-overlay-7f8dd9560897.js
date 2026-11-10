import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
import { n as r, t as i } from "./content-quick-chat-overlay-fae2ee1c31a8.js";
function a(e) {
  let t = (0, o.c)(3),
    { children: n, forceExpanded: r } = e,
    a;
  return (
    t[0] !== n || t[1] !== r
      ? ((a = (0, s.jsx)(i, { composerOnly: !0, forceExpanded: r, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = t()), r(), (s = n()));
  }))();
}
c();
export { a as HomeComposerOverlay };
//# sourceMappingURL=composer-overlay-7f8dd9560897.js.map
