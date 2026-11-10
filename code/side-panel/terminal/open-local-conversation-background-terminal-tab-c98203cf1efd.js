import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $n as t,
  CFt as n,
  Qn as r,
  SFt as i,
  Xn as a,
  Zn as o,
  er as s,
} from "./app-initial-f094ef01c64d.js";
function c({
  scope: e,
  activate: i = !0,
  backgroundTerminal: a,
  conversationId: o,
  fallbackTitle: s,
  insertAfterTabId: c,
  tabId: u,
}) {
  let d = u ?? t(o, a.id);
  return n(e, l, {
    activate: i,
    durableRoute: { kind: r, params: { terminalId: a.id }, payloadVersion: 1 },
    id: d,
    insertAfterTabId: c,
    props: { conversationId: o, terminalId: a.id },
    title: a.command.length > 0 ? a.command : s,
  });
}
var l,
  u = e(() => {
    (i(), a(), s(), (l = o({ open: c })));
  });
export { c as n, u as t };
//# sourceMappingURL=open-local-conversation-background-terminal-tab-c98203cf1efd.js.map
