import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, TJ as n, _V as r, jDt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { MRt as s, NRt as c, _z as l, e1 as u, gz as d, t1 as f } from "./app-initial-5851df3f6cb1.js";
function p(e) {
  let n = (0, m.c)(25),
    { title: i, responseExcerpt: a, statusState: o, requestExcerpt: c, waitingFor: l, draft: f } = e,
    p = o.unread || (o.unreadCount ?? 0) > 0;
  if (!a && !c && o.type === `idle` && !p && !l && !f) return null;
  let g = null,
    _ = !!f && o.type === `idle` && !l;
  if (l) {
    let e;
    (n[0] === l
      ? (e = n[1])
      : ((e = (0, h.jsx)(s, {
          variant: `warning`,
          children:
            l === `waitingOnApproval`
              ? (0, h.jsx)(t, {
                  id: `codex.localTaskRow.awaitingApproval`,
                  defaultMessage: `Awaiting approval`,
                  description: `Chip indicating a local chat is waiting for user approval`,
                })
              : (0, h.jsx)(t, {
                  id: `codex.localTaskRow.needsInput`,
                  defaultMessage: `Needs input`,
                  description: `Status pill indicating an inactive local chat needs user input`,
                }),
        })),
        (n[0] = l),
        (n[1] = e)),
      (g = e));
  } else if (o.type === `error`) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(s, {
          variant: `danger`,
          children: (0, h.jsx)(t, {
            id: `tabThumbnail.conversation.failed`,
            defaultMessage: `Chat failed`,
            description: `Status of a failed chat in a tab preview`,
          }),
        })),
        (n[2] = e))
      : (e = n[2]),
      (g = e));
  } else if (o.type === `loading`) {
    let e;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(t, {
          id: `tabThumbnail.conversation.working`,
          defaultMessage: `Working`,
          description: `Status of a conversation generating a response`,
        })),
        (n[3] = e))
      : (e = n[3]),
      (g = e));
  } else if (_) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(t, {
          id: `threadWorkspace.tab.dragDraft`,
          defaultMessage: `Draft`,
          description: `Status of unsent text in the Chat tab preview`,
        })),
        (n[4] = e))
      : (e = n[4]),
      (g = e));
  } else if (p) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(t, {
          id: `localConversation.sideChat.unreadResponse`,
          defaultMessage: `Unread response`,
          description: `Accessible status announcing that a side chat has an unread response`,
        })),
        (n[5] = e))
      : (e = n[5]),
      (g = e));
  }
  let v = _ ? f : c,
    y;
  n[6] === v
    ? (y = n[7])
    : ((y = v
        ? {
            kind: `block`,
            content: (0, h.jsx)(`div`, {
              className: `ms-6 rounded-2xl bg-user-message px-3 py-2 text-sm leading-5 text-user-message`,
              children: (0, h.jsx)(`div`, {
                className: `line-clamp-2 break-words whitespace-pre-wrap`,
                children: v.slice(0, 300),
              }),
            }),
          }
        : null),
      (n[6] = v),
      (n[7] = y));
  let b = y,
    x;
  n[8] !== a || n[9] !== _
    ? ((x = !_ && a ? { kind: `text`, content: a.slice(0, 600), lines: 6 } : null),
      (n[8] = a),
      (n[9] = _),
      (n[10] = x))
    : (x = n[10]);
  let S = x,
    C;
  n[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = (0, h.jsx)(r, {})), (n[11] = C)) : (C = n[11]);
  let w;
  n[12] !== p || n[13] !== _ || n[14] !== o || n[15] !== l
    ? ((w =
        !l && !_ && o.type !== `error` && (o.type === `loading` || p)
          ? (0, h.jsx)(`span`, { "aria-hidden": `true`, children: (0, h.jsx)(u, { statusState: o }) })
          : null),
      (n[12] = p),
      (n[13] = _),
      (n[14] = o),
      (n[15] = l),
      (n[16] = w))
    : (w = n[16]);
  let T;
  n[17] !== b || n[18] !== S ? ((T = [b, S]), (n[17] = b), (n[18] = S), (n[19] = T)) : (T = n[19]);
  let E;
  return (
    n[20] !== g || n[21] !== w || n[22] !== T || n[23] !== i
      ? ((E = (0, h.jsx)(d, { icon: C, status: w, subtitle: g, title: i, sections: T })),
        (n[20] = g),
        (n[21] = w),
        (n[22] = T),
        (n[23] = i),
        (n[24] = E))
      : (E = n[24]),
    E
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = a()), i(), c(), n(), f(), l(), (h = o()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=conversation-a27aae5d4454.js.map
