import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, Vxt as r, vzt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
import {
  $Dt as o,
  Cwr as s,
  GDt as c,
  HDt as l,
  Pen as u,
  gwr as d,
  kSt as f,
  mSt as p,
  nOt as m,
  sCr as h,
  ten as g,
  uSt as _,
  yCr as v,
} from "./app-initial-5851df3f6cb1.js";
function y(e) {
  let n = (0, b.c)(14),
    i;
  n[0] === e ? (i = n[1]) : ((i = e === void 0 ? {} : e), (n[0] = e), (n[1] = i));
  let { transcriptMcpAppIds: a, blockedWidgetSource: o, shouldBlockExternalEgress: s } = i,
    c = s !== void 0 && s,
    u = t(d),
    _ = t(h),
    v = r(p),
    y = r(g),
    S,
    C;
  (n[2] !== y || n[3] !== o || n[4] !== _ || n[5] !== v || n[6] !== u || n[7] !== c || n[8] !== a
    ? ((S = () => {
        u.value.routeKind === `chatgpt-thread` &&
          l(
            _,
            y.filter((e) => c || (o != null && (e.widgetSource ?? `descriptor`) === o)),
          );
        for (let [e, t] of v)
          (c ||
            (o != null && (t.content.mcpAppScope.widgetSource ?? `descriptor`) === o) ||
            (t.hostedInThreadScrollLayout && a?.has(e) === !1)) &&
            f(u, e);
      }),
      (C = [y, o, a, _, v, u, c]),
      (n[2] = y),
      (n[3] = o),
      (n[4] = _),
      (n[5] = v),
      (n[6] = u),
      (n[7] = c),
      (n[8] = a),
      (n[9] = S),
      (n[10] = C))
    : ((S = n[9]), (C = n[10])),
    (0, x.useLayoutEffect)(S, C));
  let w, T;
  return (
    n[11] === u
      ? ((w = n[12]), (T = n[13]))
      : ((w = () => {
          m(u);
        }),
        (T = [u]),
        (n[11] = u),
        (n[12] = w),
        (n[13] = T)),
    (0, x.useLayoutEffect)(w, T),
    null
  );
}
var b, x;
function S() {
  return (S = e(() => {
    ((b = i()), n(), (x = a()), u(), c(), v(), s(), o(), _());
  }))();
}
export { S as n, y as t };
//# sourceMappingURL=thread-bridge-cac52ebaa827.js.map
