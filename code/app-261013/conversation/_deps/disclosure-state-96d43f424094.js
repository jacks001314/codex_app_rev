import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, fSt as r, rst as i, spt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  FFr as s,
  GMr as c,
  NDr as l,
  XMr as u,
  Ymr as d,
  ehr as f,
  pOr as p,
  tNr as m,
  zFr as h,
} from "./app-initial-5851df3f6cb1.js";
function g(e, t) {
  if ((e.set(x, t == null ? null : { ...t, ready: !1, presented: !1 }), t == null)) return;
  let n = e.get(s)?.key,
    r;
  e.when(({ get: i }) => {
    let a = i(x),
      o = i(s);
    if (
      (r == null && o?.state?.initialChatGptConversationId === t.conversationId && (r = o.key),
      a?.conversationId !== t.conversationId)
    )
      return !0;
    let l =
      i(u) !== t.userId ||
      i(c) !== t.accountId ||
      i(p) !== t.accountId ||
      (o?.key !== n && o?.key !== r) ||
      (r != null && o?.key !== r);
    return (l && e.set(x, null), l);
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
    e.get(u) === n.userId &&
    e.get(c) === n.accountId &&
    e.get(p) === n.accountId &&
    (e.set(x, { ...n, presented: !0 }),
    e.set(S, (e) => new Set([...e, ...b(n)])),
    n.disclosure != null &&
      d
        .safePost(`/gizmos/business-agents/disclosures/viewed`, {
          additionalHeaders: { "ChatGPT-Account-ID": n.accountId, [a]: n.accountId },
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
    (n(),
      i(),
      m(),
      h(),
      o(),
      f(),
      l(),
      (x = r(t, null, {
        onMount: (e) => {
          let t = () => e(null);
          return (window.addEventListener(`pagehide`, t), () => window.removeEventListener(`pagehide`, t));
        },
      })),
      (S = r(t, () => new Set())));
  }))();
}
export { g as a, C as i, x as n, _ as o, v as r, y as t };
//# sourceMappingURL=disclosure-state-96d43f424094.js.map
