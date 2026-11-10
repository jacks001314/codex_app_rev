import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, TY as r, XOt as i, pH as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
import { BFt as s, GZ as c, KZ as l, _B as u, vB as d, zFt as f } from "./app-initial-ad16eaadf81f.js";
function p(e) {
  let t = (0, m.c)(25),
    { title: n, responseExcerpt: r, statusState: i, requestExcerpt: s, waitingFor: l, draft: d } = e,
    p = i.unread || (i.unreadCount ?? 0) > 0;
  if (!r && !s && i.type === `idle` && !p && !l && !d) return null;
  let g = null,
    _ = !!d && i.type === `idle` && !l;
  if (l) {
    let e;
    (t[0] === l
      ? (e = t[1])
      : ((e = (0, h.jsx)(f, {
          variant: `warning`,
          children:
            l === `waitingOnApproval`
              ? (0, h.jsx)(o, {
                  id: `codex.localTaskRow.awaitingApproval`,
                  defaultMessage: `Awaiting approval`,
                  description: `Chip indicating a local chat is waiting for user approval`,
                })
              : (0, h.jsx)(o, {
                  id: `codex.localTaskRow.needsInput`,
                  defaultMessage: `Needs input`,
                  description: `Status pill indicating an inactive local chat needs user input`,
                }),
        })),
        (t[0] = l),
        (t[1] = e)),
      (g = e));
  } else if (i.type === `error`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(f, {
          variant: `danger`,
          children: (0, h.jsx)(o, {
            id: `tabThumbnail.conversation.failed`,
            defaultMessage: `Chat failed`,
            description: `Status of a failed chat in a tab preview`,
          }),
        })),
        (t[2] = e))
      : (e = t[2]),
      (g = e));
  } else if (i.type === `loading`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(o, {
          id: `tabThumbnail.conversation.working`,
          defaultMessage: `Working`,
          description: `Status of a conversation generating a response`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (g = e));
  } else if (_) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(o, {
          id: `threadWorkspace.tab.dragDraft`,
          defaultMessage: `Draft`,
          description: `Status of unsent text in the Chat tab preview`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (g = e));
  } else if (p) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, h.jsx)(o, {
          id: `localConversation.sideChat.unreadResponse`,
          defaultMessage: `Unread response`,
          description: `Accessible status announcing that a side chat has an unread response`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (g = e));
  }
  let v = _ ? d : s,
    y;
  t[6] === v
    ? (y = t[7])
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
      (t[6] = v),
      (t[7] = y));
  let b = y,
    x;
  t[8] !== r || t[9] !== _
    ? ((x = !_ && r ? { kind: `text`, content: r.slice(0, 600), lines: 6 } : null),
      (t[8] = r),
      (t[9] = _),
      (t[10] = x))
    : (x = t[10]);
  let S = x,
    C;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = (0, h.jsx)(a, {})), (t[11] = C)) : (C = t[11]);
  let w;
  t[12] !== p || t[13] !== _ || t[14] !== i || t[15] !== l
    ? ((w =
        !l && !_ && i.type !== `error` && (i.type === `loading` || p)
          ? (0, h.jsx)(`span`, { "aria-hidden": `true`, children: (0, h.jsx)(c, { statusState: i }) })
          : null),
      (t[12] = p),
      (t[13] = _),
      (t[14] = i),
      (t[15] = l),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== b || t[18] !== S ? ((T = [b, S]), (t[17] = b), (t[18] = S), (t[19] = T)) : (T = t[19]);
  let E;
  return (
    t[20] !== g || t[21] !== w || t[22] !== T || t[23] !== n
      ? ((E = (0, h.jsx)(u, { icon: C, status: w, subtitle: g, title: n, sections: T })),
        (t[20] = g),
        (t[21] = w),
        (t[22] = T),
        (t[23] = n),
        (t[24] = E))
      : (E = t[24]),
    E
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = n()), i(), s(), r(), l(), d(), (h = t()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=conversation-d1c3cb59a3b4.js.map
