import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  N3t as t,
  O3t as n,
  VTt as r,
  hEt as i,
  hmn as a,
  kmn as o,
  rTt as s,
} from "./app-initial-f094ef01c64d.js";
import { a as c, n as l } from "./local-conversation-thread-a2bcd054c9d2.js";
import { n as u, t as d } from "./content-quick-chat-overlay-4f38c1f284d2.js";
function f(e) {
  let n = (0, p.c)(10),
    { children: a, conversationId: o } = e,
    s = t(r, o),
    c;
  n[0] !== o || n[1] !== s
    ? ((c = { hostId: s, threadId: o }), (n[0] = o), (n[1] = s), (n[2] = c))
    : (c = n[2]);
  let u = t(i, c),
    f;
  n[3] !== o || n[4] !== s
    ? ((f = () => (0, m.jsx)(l, { conversationId: o, hostId: s })),
      (n[3] = o),
      (n[4] = s),
      (n[5] = f))
    : (f = n[5]);
  let h;
  return (
    n[6] !== a || n[7] !== f || n[8] !== u
      ? ((h = (0, m.jsx)(d, { title: u, renderTranscript: f, children: a })),
        (n[6] = a),
        (n[7] = f),
        (n[8] = u),
        (n[9] = h))
      : (h = n[9]),
    h
  );
}
var p, m;
e(() => {
  ((p = o()), n(), s(), u(), c(), (m = a()));
})();
export { f as LocalConversationQuickChatOverlay };
//# sourceMappingURL=local-conversation-quick-chat-overlay-1161a9f8caa4.js.map
