import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $St as t, FBt as n, LNt as r, PBt as i, ZSt as a, iCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  Fzt as s,
  MOr as c,
  Mzt as l,
  g9t as u,
  jzt as d,
  m9t as f,
  zOr as p,
} from "./app-initial-ad16eaadf81f.js";
import { n as m, t as h } from "./thread-summary-panel-components-10c7926d4688.js";
function g() {
  let e = (0, _.c)(6),
    n = t(c),
    r = o(s),
    i = (0, v.useContext)(f),
    a,
    l;
  (e[0] === n
    ? ((a = e[1]), (l = e[2]))
    : ((a = () => () => d(n)), (l = [n]), (e[0] = n), (e[1] = a), (e[2] = l)),
    (0, v.useLayoutEffect)(a, l));
  let u;
  return (
    e[3] !== i || e[4] !== r
      ? ((u =
          r == null
            ? null
            : (0, y.jsx)(y.Fragment, {
                children: [r, ...(r.overlay == null ? [] : [r.overlay])].map((e) =>
                  (0, y.jsx)(
                    h.Root,
                    {
                      animateOnMount: e.animateOnMount ?? !0,
                      fillHeight: !0,
                      fullWidth: e.isFullWidth,
                      fullWidthTransition: e.fullWidthTransition,
                      isPIPObstacle: !1,
                      portalContainer: i,
                      reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                      shouldHideInlineImmediately: !1,
                      shouldShow: !0,
                      width: e.width ?? 420,
                      children: (0, y.jsx)(h.Content, {
                        className: `h-full`,
                        "aria-label": e.label,
                        role: `complementary`,
                        scrollable: !1,
                        children: e.content,
                      }),
                    },
                    e.renderKey,
                  ),
                ),
              })),
        (e[3] = i),
        (e[4] = r),
        (e[5] = u))
      : (u = e[5]),
    u
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = i()), a(), (v = n()), u(), p(), l(), m(), (y = r()));
  }))();
}
export { b as n, g as t };
//# sourceMappingURL=chatgpt-entity-panel-928c74da246b.js.map
