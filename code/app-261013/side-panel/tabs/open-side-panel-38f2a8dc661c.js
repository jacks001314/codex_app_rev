import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { B4 as t, z4 as n } from "./app-shared-bbfeca5e5737.js";
import {
  Gvn as r,
  Kvn as i,
  Mwn as a,
  RCr as o,
  aIr as s,
  dwn as c,
  hWt as l,
  hwn as u,
  hwr as d,
  jwn as f,
  kCr as p,
  lwr as m,
  mwr as h,
  oIr as g,
  pWt as _,
  pwn as v,
} from "./app-initial-5851df3f6cb1.js";
import { a as y, t as b } from "./entry-c845dec45605.js";
function x({ open: e }) {
  return a(`chatgpt-flashcards`, S, {
    dropDestinations: [`right`],
    exitFullWidthOnClose: !0,
    isAvailable: (e) => e.value.routeKind === `chatgpt-thread`,
    open: e,
    showInNewTabLauncher: !1,
  });
}
var S;
function C() {
  return (C = e(() => {
    (b(), f(), n(), (S = t(y)));
  }))();
}
function w(e, t, n) {
  if (e.value.routeKind !== `chatgpt-thread` || !e.get(p) || e.get(d).width / e.get(r) <= 960) return null;
  let i = `chatgpt-flashcards:${crypto.randomUUID()}`,
    a = e
      .get(g)
      .formatMessage({
        id: `libraryNext.flashcards.tabTitle`,
        defaultMessage: `Flashcards`,
        description: `Tab title for the saved flashcard deck viewer beside a conversation.`,
      }),
    o = x({ open: w });
  v(e, o, { revealAndFocus: !0, canUndoClose: () => !1, id: i, props: t, onClose: n, title: a, tooltip: a });
  let s = e.get(u.tabById$, i);
  return s == null
    ? null
    : (l(e, { kind: `content`, tab: s }, { mode: `split`, contentSide: `right` }), () => u.closeTab(e, i));
}
function T() {
  return (T = e(() => {
    (o(), c(), m(), h(), i(), s(), C(), _());
  }))();
}
export { w as n, T as t };
//# sourceMappingURL=open-side-panel-38f2a8dc661c.js.map
