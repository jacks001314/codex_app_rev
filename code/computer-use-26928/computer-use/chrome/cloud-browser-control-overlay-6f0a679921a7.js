import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Wrn as t, Yrn as n, _dn as r, mcn as i } from "./app-shared-7552fc8d5d82.js";
function a(e) {
  let t = (0, o.c)(7),
    { onActivate: r, label: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a =
        i ??
        (0, s.jsx)(n, {
          id: `chatgptConversations.cloudBrowser.liveView.takeControl`,
          defaultMessage: `Click anywhere to use the browser`,
          description: `Instruction centered below the live Cloud browser before a user activates interactive control. Clicking anywhere in the browser requests control and dismisses this instruction. No placeholders or rich text.`,
        })),
      (t[0] = i),
      (t[1] = a));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c = (0, s.jsx)(`span`, {
        className: `pointer-events-none absolute inset-x-0 top-full flex h-12 items-center justify-center px-4 text-center text-sm text-media-foreground/50 select-none`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = c));
  let l;
  return (
    t[4] !== r || t[5] !== c
      ? ((l = (0, s.jsx)(`button`, {
          className: `absolute inset-0 cursor-interaction bg-transparent`,
          type: `button`,
          onClick: r,
          children: c,
        })),
        (t[4] = r),
        (t[5] = c),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = r()), t(), (s = i()));
  }))();
}
export { c as n, a as t };
//# sourceMappingURL=cloud-browser-control-overlay-6f0a679921a7.js.map
