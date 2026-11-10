import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  EPt as n,
  Jbt as r,
  TLt as i,
  _It as a,
  fLt as o,
  lIt as s,
  oIt as c,
  pIt as l,
  pLt as u,
  rst as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  $vr as f,
  Djr as p,
  Ejr as m,
  Gvr as h,
  Iyr as g,
  Nyr as _,
  Wvr as v,
  Xvr as y,
  djr as b,
  eyr as x,
  inr as S,
  mjr as C,
  pjr as w,
  rnr as T,
  tyr as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as D, r as O, t as k } from "./handoff-target-f50e58d2bbbc.js";
import { n as A, t as j } from "./agent-activity-item-1be092f0c744.js";
function M(e, t = !1, n = !1, r) {
  let i = e.filter((e) => e.type !== `steered` && !0),
    a = i.length === e.length ? e : i;
  return t
    ? v(a, n, r?.hostId, r?.hideIncompleteAeonAssistantMessages, r?.computerHandoffsByItemId)
    : r?.projectAeonUserMessageReactions === !0
      ? y(a)
      : a;
}
function N(e, t = !0) {
  let n = [],
    r = [],
    i = (e) => {
      r.length !== 0 && (n.push({ type: `activity`, items: r, collapseWhenPossible: e }), (r = []));
    };
  for (let a of e) {
    if (a.type === `user-message`) {
      (i(!1), n.push({ type: `user-message`, item: a }));
      continue;
    }
    if (a.type === `generated-image`) {
      i(!1);
      let e = n.at(-1);
      e?.type === `generated-images` ? e.items.push(a) : n.push({ type: `generated-images`, items: [a] });
      continue;
    }
    if (a.type === `assistant-message`) {
      (i(t), n.push({ type: `assistant-message`, item: a }));
      continue;
    }
    r.push(a);
  }
  return (i(!1), n);
}
function P() {
  return (P = e(() => {
    h();
  }))();
}
function F(e, t = !0, n, r) {
  let i = [],
    a = N(e, t),
    o = -1;
  for (let [e, t] of a.entries()) t.type === `user-message` && (o = e);
  let s = 0;
  for (let [e, t] of a.entries())
    switch (t.type) {
      case `activity`: {
        let a = [],
          o = 0,
          s = () => {
            a.length !== 0 &&
              (i.push({
                type: `agent-activity`,
                key: I(`transcript-activity`, a, `${e}-${o}`, r),
                items: a,
                collapseWhenPossible: t.collapseWhenPossible,
              }),
              (a = []),
              (o += 1));
          };
        for (let [r, o] of t.items.entries()) {
          let c = t.items[r - 1];
          if (
            o.type === `subagent-activity` &&
            !o.isMessage &&
            c?.type === `subagent-activity` &&
            !c.isMessage
          )
            continue;
          let l =
            o.type === `reasoning` || o.type === `automatic-approval-review` || o.type === `subagent-activity`
              ? null
              : j(o);
          if (l?.grouping === `standalone` || n?.has(o) === !0) {
            (s(),
              i.push({
                type: `activity-item`,
                key: `transcript-activity-item-${L(o, `${e}-${r}`)}`,
                item: o,
              }));
            continue;
          }
          if (o.type === `reasoning` || o.type === `automatic-approval-review` || l != null) {
            a.push(o);
            continue;
          }
          (s(),
            o.type !== `turn-diff` &&
              i.push({
                type: `activity-item`,
                key: `transcript-activity-item-${L(o, `${e}-${r}`)}`,
                item: o,
              }));
        }
        s();
        break;
      }
      case `assistant-message`:
        i.push({
          type: `assistant-message`,
          key: `transcript-assistant-${L(t.item, String(e))}`,
          item: t.item,
        });
        break;
      case `generated-images`:
        i.push({
          type: `generated-images`,
          key: I(`transcript-generated-images`, t.items, String(e), r),
          items: t.items,
        });
        break;
      case `user-message`:
        (i.push({
          type: `user-message`,
          key: `transcript-user-${L(t.item, String(e))}`,
          item: t.item,
          isFirstUserMessage: s === 0,
          isLastUserMessage: e === o,
        }),
          (s += 1));
    }
  return i;
}
function I(e, t, n, r) {
  let i = `${e}-${L(t[0], n)}`;
  if (r == null || r(i)) return i;
  for (let i = 1; i < t.length; i += 1) {
    let a = `${e}-${L(t[i], n)}`;
    if (r(a)) return a;
  }
  return i;
}
function L(e, t) {
  let n;
  return (
    `searchItemId` in e && e.searchItemId != null
      ? (n = e.searchItemId)
      : `sourceItemId` in e && e.sourceItemId != null
        ? (n = e.sourceItemId)
        : `id` in e
          ? (n = e.id)
          : `callId` in e
            ? (n = e.callId)
            : `requestId` in e
              ? (n = e.requestId)
              : `handoffId` in e && (n = e.handoffId),
    n == null ? t : `${e.type}:${typeof n}:${n}`
  );
}
function R() {
  return (R = e(() => {
    (A(), P());
  }))();
}
function z(e) {
  let t = new Map();
  return (n) => {
    if (
      n.type !== `mcpToolCall` ||
      n.status !== `completed` ||
      n.error != null ||
      n.result == null ||
      !p(n.server) ||
      n.tool !== `cloud_threads.read` ||
      n.appContext?.connectorId !== `connector_openai_threads` ||
      n.appContext.actionName !== `read` ||
      C({ isCodexAppsServer: !0, result: { type: `success`, structuredContent: n.result.structuredContent } })
    )
      return null;
    let i = H.safeParse(n.arguments),
      a = U.safeParse(b({ isCodexAppsServer: !0, toolResult: n.result }).structuredContent);
    if (
      !i.success ||
      !a.success ||
      a.data.threadId !== i.data.threadId ||
      a.data.turnId !== i.data.turnId ||
      a.data.parentThreadId !== e ||
      a.data.threadId === e ||
      a.data.page.hasMore !== (a.data.page.nextCursor != null)
    )
      return null;
    let { threadId: o, turnId: s, items: c, page: l } = a.data,
      u = JSON.stringify([o, s]),
      d = t.get(u);
    if (
      ((d == null || i.data.cursor == null) &&
        ((d = { nextCursor: null, pendingItem: null, foundHandoff: !1 }), t.set(u, d)),
      d.foundHandoff)
    )
      return null;
    ((i.data.cursor ?? null) !== d.nextCursor && (d.pendingItem = null), (d.nextCursor = l.nextCursor));
    for (let e of c) {
      if (e.itemType !== `mcpToolCall`) {
        d.pendingItem = null;
        continue;
      }
      e.chunkIndex === 0 && (d.pendingItem = { id: e.itemId, nextChunkIndex: 0, content: `` });
      let t = d.pendingItem;
      if (
        t == null ||
        t.id !== e.itemId ||
        t.nextChunkIndex !== e.chunkIndex ||
        t.content.length + e.content.length > V
      ) {
        d.pendingItem = null;
        continue;
      }
      if (((t.content += e.content), (t.nextChunkIndex += 1), !e.isLastChunk)) continue;
      d.pendingItem = null;
      let n = B(t.content);
      if (n != null) return ((d.foundHandoff = !0), { requestId: e.itemId, threadId: r(o), tabId: n.tabId });
    }
    return (l.hasMore || (d.pendingItem = null), null);
  };
}
function B(e) {
  try {
    let t = W.safeParse(JSON.parse(e));
    return t.success ? t.data.browserHandoff : null;
  } catch {
    return null;
  }
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    (d(),
      n(),
      m(),
      w(),
      (V = 1048576),
      (H = u({ threadId: i().min(1), turnId: i().min(1), cursor: i().min(1).nullish() })),
      (U = u({
        schemaVersion: t(2),
        threadId: i().min(1),
        turnId: i().min(1),
        parentThreadId: i().nullable(),
        items: l(
          u({
            itemId: i().min(1),
            itemType: i(),
            chunkIndex: o().int().nonnegative(),
            isLastChunk: a(),
            content: i(),
          }),
        ),
        page: u({ hasMore: a(), nextCursor: i().min(1).nullable() }),
      })),
      (W = u({
        server: c([`node_repl`, `cua_repl`]),
        tool: t(`js`),
        status: t(`completed`),
        error: s().optional(),
        result: u({}),
        browserHandoff: u({
          tabId: i()
            .regex(/^[1-9]\d{0,15}$/)
            .refine((e) => Number.isSafeInteger(Number(e))),
          status: t(`requested`),
          resolution: t(`unknown`),
        }),
      })));
  }))();
}
function K(e, t) {
  let n = new Map(),
    r = [],
    i = z(e),
    a = null;
  for (let o of t) {
    if (o.type !== `mcpToolCall` && o.type !== `agentMessage`) continue;
    let t = k(e, o) ?? i(o);
    if (t != null) {
      a = t;
      continue;
    }
    let s = q(o);
    if (s != null) {
      let e = s.message_metadata?.cloud_browser_handoff === void 0 ? a : D(o.id, s.message_metadata);
      (e != null && (n.set(o.id, e), r.push({ roomId: s.roomId, messageId: s.messageId, handoff: e })),
        (a = null));
    } else
      a != null &&
        o.type === `agentMessage` &&
        (o.phase !== `commentary` || o.delivery === `async`) &&
        _(o.text, !1, { unwrapPaddedCdataEnvelope: o.phase === `final_answer` }).content.trim().length > 0 &&
        (n.set(o.id, a), (a = null));
  }
  return { byItemId: n, sentMessages: r };
}
function q(e) {
  if (
    e.type !== `mcpToolCall` ||
    e.status !== `completed` ||
    e.error != null ||
    e.result == null ||
    !x(e.server, e.appContext, e.arguments) ||
    C({ isCodexAppsServer: !0, result: { type: `success`, structuredContent: e.result.structuredContent } })
  )
    return null;
  let t = b({ isCodexAppsServer: !0, toolResult: e.result });
  return E(e.appContext, t.structuredContent);
}
function J() {
  return (J = e(() => {
    (g(), w(), f(), O(), G());
  }))();
}
function Y({ items: e, interruptedByThisClient: t, isTurnInProgress: n }) {
  let r = [],
    i = 0,
    a = 0;
  for (let t of e) {
    if (t.type === `user-message` && t.steeringStatus != null) {
      ((i = 0), (a += 1));
      continue;
    }
    if (t.type === `steered`) {
      a > 0 ? --a : (i = 0);
      continue;
    }
    if (t.type === `generated-image`) {
      if (t.src != null) {
        r.push(t);
        continue;
      }
      n && (t.status === `in_progress` || t.status === `inProgress`) && (i += 1);
    }
  }
  return { completedImages: r, hasPendingItems: i > 0, pendingPlaceholderCount: t ? 0 : i };
}
function X({ completedImages: e, endResourcePaths: t, pendingPlaceholderCount: n }) {
  let r = Q(t) ? [] : e;
  return r.length === 0 && n === 0 ? null : { images: r, pendingImageCount: n };
}
function Z(e) {
  return e.some(
    (e) =>
      e.type === `generated-image` &&
      (e.failure?.type !== `usageLimitExceeded` || e.failure.limitId !== `image_gen`),
  );
}
function Q(e) {
  return e.some((e) => T(e) === `pptx`);
}
function $() {
  return ($ = e(() => {
    S();
  }))();
}
export { Z as a, F as c, P as d, Q as i, R as l, X as n, K as o, $ as r, J as s, Y as t, M as u };
//# sourceMappingURL=generated-image-output-visibility-89248db44ece.js.map
