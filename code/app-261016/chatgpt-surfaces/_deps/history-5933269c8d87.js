import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  XOt as i,
  ZSt as a,
  nCt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { B1n as c, VPn as l, a$n as u, aqn as d, o$n as f, oqn as p } from "./app-initial-ad16eaadf81f.js";
import { cv as m, lv as h } from "./app-primary-3e00728c2a4c.js";
import { a as g, n as _, o as v, r as y } from "./display-9ba7bb4f2670.js";
function b(e) {
  let t = (0, x.c)(11),
    { conversationId: n } = e,
    r = o(y, n),
    i = o(f, n),
    a = o(c, n),
    l = o(d, a ?? n),
    u = h(),
    p = i?.selectedSectionId,
    m = r?.needsOlderMessages === !0,
    _;
  t[0] === u
    ? (_ = t[1])
    : ((_ = () => {
        let e = u.getScrollElement();
        e != null &&
          (u.holdViewport(),
          u.scrollToDistanceFromBottomPx(Math.max(0, e.scrollHeight - e.clientHeight), `instant`));
      }),
      (t[0] = u),
      (t[1] = _));
  let v = (0, S.useEffectEvent)(_),
    b;
  t[2] !== m || t[3] !== v
    ? ((b = () => {
        m || v();
      }),
      (t[2] = m),
      (t[3] = v),
      (t[4] = b))
    : (b = t[4]);
  let w;
  if (
    (t[5] !== m || t[6] !== p ? ((w = [p, m]), (t[5] = m), (t[6] = p), (t[7] = w)) : (w = t[7]),
    (0, S.useLayoutEffect)(b, w),
    !m)
  )
    return null;
  if (l?.cursor != null && !l.complete) {
    let e;
    return (
      t[8] === n ? (e = t[9]) : ((e = (0, C.jsx)(g, { conversationId: n })), (t[8] = n), (t[9] = e)),
      e
    );
  }
  let T;
  return (
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, C.jsx)(`div`, {
          className: `py-4 text-center text-sm text-secondary`,
          role: `status`,
          children: (0, C.jsx)(s, {
            id: `sectionedConversation.historyUnavailable`,
            defaultMessage: `This section isn't available in this conversation's history`,
            description: `Shown when the saved section boundary cannot be found after loading the available conversation history`,
          }),
        })),
        (t[10] = T))
      : (T = t[10]),
    T
  );
}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = r()), a(), (S = t()), i(), m(), l(), v(), p(), _(), u(), (C = n()));
  }))();
}
w();
export { b as SectionHistory };
//# sourceMappingURL=history-5933269c8d87.js.map
