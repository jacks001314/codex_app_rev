import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Jnt as t,
  Xnt as n,
  Ynt as r,
  Znt as i,
  dwn as a,
  pwn as o,
  qnt as s,
  tDn as c,
  uDn as l,
} from "./app-initial-5851df3f6cb1.js";
function u({
  scope: e,
  revealAndFocus: t = !0,
  backgroundTerminal: i,
  conversationId: a,
  fallbackTitle: s,
  insertPosition: c,
  tabId: u,
}) {
  let f = u ?? n(a, i.id);
  return o(e, d, {
    revealAndFocus: t,
    durableRoute: { kind: r, params: { terminalId: i.id }, payloadVersion: 1 },
    id: f,
    insertPosition: c,
    props: { conversationId: a, hostId: e.get(l), terminalId: i.id, itemKey: i.itemKey },
    title: i.command.length > 0 ? i.command : s,
  });
}
var d;
function f() {
  return (f = e(() => {
    (a(), c(), s(), i(), (d = t({ open: u })));
  }))();
}
export { u as n, f as t };
//# sourceMappingURL=open-local-conversation-background-terminal-tab-d808e5793cf2.js.map
