import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, Vxt as r, vzt as i, xMt as a, yzt as o } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as s,
  Y8t as c,
  eWt as l,
  gwr as u,
  iWt as d,
  q8t as f,
  tWt as p,
} from "./app-initial-5851df3f6cb1.js";
import { n as m, t as h } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
function g() {
  let e = (0, _.c)(6),
    n = t(u),
    i = r(d),
    a = (0, v.useContext)(f),
    o,
    s;
  (e[0] === n
    ? ((o = e[1]), (s = e[2]))
    : ((o = () => () => l(n)), (s = [n]), (e[0] = n), (e[1] = o), (e[2] = s)),
    (0, v.useLayoutEffect)(o, s));
  let c;
  return (
    e[3] !== a || e[4] !== i
      ? ((c =
          i == null
            ? null
            : (0, y.jsx)(y.Fragment, {
                children: [i, ...(i.overlay == null ? [] : [i.overlay])].map((e) =>
                  (0, y.jsx)(
                    h.Root,
                    {
                      animateOnMount: e.animateOnMount ?? !0,
                      fillHeight: !0,
                      fullWidth: e.isFullWidth,
                      fullWidthTransition: e.fullWidthTransition,
                      isPIPObstacle: !1,
                      portalContainer: a,
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
        (e[3] = a),
        (e[4] = i),
        (e[5] = c))
      : (c = e[5]),
    c
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = i()), n(), (v = o()), c(), s(), p(), m(), (y = a()));
  }))();
}
export { b as n, g as t };
//# sourceMappingURL=chatgpt-entity-panel-cb3a46b7c6bc.js.map
