import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, Smt as r, ZSt as i, kCt as a, sct as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as s,
  BRr as c,
  IMr as l,
  Ycr as u,
  iRr as d,
  nMr as f,
  tyr as p,
  wLr as m,
  zRr as h,
} from "./app-initial-ad16eaadf81f.js";
function g(e, t) {
  if ((e.set(x, t == null ? null : { ...t, ready: !1, presented: !1 }), t == null)) return;
  let n = e.get(u)?.key,
    r;
  e.when(({ get: i }) => {
    let a = i(x),
      o = i(u);
    if (
      (r == null && o?.state?.initialChatGptConversationId === t.conversationId && (r = o.key),
      a?.conversationId !== t.conversationId)
    )
      return !0;
    let s =
      i(c) !== t.userId ||
      i(h) !== t.accountId ||
      i(l) !== t.accountId ||
      (o?.key !== n && o?.key !== r) ||
      (r != null && o?.key !== r);
    return (s && e.set(x, null), s);
  });
}
function _(e, t, n) {
  let r = e.get(x);
  if (r?.conversationId !== t) return;
  let i = { ...r, disclosure: n ?? void 0, ready: !0 },
    a = b(i),
    o = e.get(S);
  (n?.viewed === !0 && e.set(S, new Set([...o, ...a])),
    e.set(x, n?.viewed === !0 || a.some((e) => o.has(e)) ? null : i));
}
function v(e, t) {
  e.get(x)?.conversationId === t && e.set(x, null);
}
function y(e, t) {
  let n = e.get(x);
  n?.conversationId === t &&
    n.ready &&
    !n.presented &&
    e.get(c) === n.userId &&
    e.get(h) === n.accountId &&
    e.get(l) === n.accountId &&
    (e.set(x, { ...n, presented: !0 }),
    e.set(S, (e) => new Set([...e, ...b(n)])),
    n.disclosure != null &&
      d
        .safePost(`/gizmos/business-agents/disclosures/viewed`, {
          additionalHeaders: { "ChatGPT-Account-ID": n.accountId, [r]: n.accountId },
          requestBody: { advertiser_id: n.disclosure.advertiser_id, version: n.disclosure.version },
        })
        .catch(() => {}));
}
function b(e) {
  let t = [JSON.stringify([e.userId, `fallback`, e.advertiserId])];
  return (
    e.disclosure != null &&
      t.push(JSON.stringify([e.userId, e.disclosure.advertiser_id, e.disclosure.version])),
    t
  );
}
var x, S;
function C() {
  return (C = e(() => {
    (i(),
      o(),
      m(),
      s(),
      t(),
      p(),
      f(),
      (x = a(n, null, {
        onMount: (e) => {
          let t = () => e(null);
          return (window.addEventListener(`pagehide`, t), () => window.removeEventListener(`pagehide`, t));
        },
      })),
      (S = a(n, () => new Set())));
  }))();
}
export { g as a, C as i, x as n, _ as o, v as r, y as t };
//# sourceMappingURL=disclosure-state-b93b7fa86863.js.map
