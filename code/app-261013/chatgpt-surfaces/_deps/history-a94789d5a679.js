import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  jDt as r,
  vzt as i,
  xMt as a,
  yzt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import { BYn as c, HUn as l, UUn as u, VYn as d, pZn as f, yjn as p } from "./app-initial-5851df3f6cb1.js";
import { n as m, r as h } from "./thread-scroll-controller-context-value-f766898c7055.js";
import { a as g, n as _, o as v, r as y } from "./display-d52e460edecd.js";
function b(e) {
  let n = (0, x.c)(11),
    { conversationId: r } = e,
    i = s(y, r),
    a = s(d, r),
    o = s(f, r),
    c = s(l, o ?? r),
    u = h(),
    p = a?.selectedSectionId,
    m = i?.needsOlderMessages === !0,
    _;
  n[0] === u
    ? (_ = n[1])
    : ((_ = () => {
        let e = u.getScrollElement();
        e != null &&
          (u.holdViewport(),
          u.scrollToDistanceFromBottomPx(Math.max(0, e.scrollHeight - e.clientHeight), `instant`));
      }),
      (n[0] = u),
      (n[1] = _));
  let v = (0, S.useEffectEvent)(_),
    b;
  n[2] !== m || n[3] !== v
    ? ((b = () => {
        m || v();
      }),
      (n[2] = m),
      (n[3] = v),
      (n[4] = b))
    : (b = n[4]);
  let w;
  if (
    (n[5] !== m || n[6] !== p ? ((w = [p, m]), (n[5] = m), (n[6] = p), (n[7] = w)) : (w = n[7]),
    (0, S.useLayoutEffect)(b, w),
    !m)
  )
    return null;
  if (c?.cursor != null && !c.complete) {
    let e;
    return (
      n[8] === r ? (e = n[9]) : ((e = (0, C.jsx)(g, { conversationId: r })), (n[8] = r), (n[9] = e)),
      e
    );
  }
  let T;
  return (
    n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, C.jsx)(`div`, {
          className: `py-4 text-center text-sm text-secondary`,
          role: `status`,
          children: (0, C.jsx)(t, {
            id: `sectionedConversation.historyUnavailable`,
            defaultMessage: `This section isn't available in this conversation's history`,
            description: `Shown when the saved section boundary cannot be found after loading the available conversation history`,
          }),
        })),
        (n[10] = T))
      : (T = n[10]),
    T
  );
}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = i()), n(), (S = o()), r(), m(), p(), v(), u(), _(), c(), (C = a()));
  }))();
}
w();
export { b as SectionHistory };
//# sourceMappingURL=history-a94789d5a679.js.map
