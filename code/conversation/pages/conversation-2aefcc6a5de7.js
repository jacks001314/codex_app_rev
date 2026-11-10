import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Cpn as t,
  MMt as n,
  Spn as r,
  Vct as i,
  Xdt as a,
  alt as o,
  cL as s,
  hmn as c,
  jMt as l,
  kmn as u,
  sL as d,
} from "./app-initial-f094ef01c64d.js";
function f(e) {
  let n = (0, p.c)(11),
    { title: r, responseExcerpt: a, isResponseInProgress: s, hasUnreadResponse: c } = e;
  if (!a && !s && !c) return null;
  let u = null;
  if (s) {
    let e;
    (n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, m.jsxs)(`span`, {
          className: `inline-flex items-center gap-1.5`,
          children: [
            (0, m.jsx)(l, { className: `icon-xs text-info`, as: `span` }),
            (0, m.jsx)(t, {
              id: `tabThumbnail.conversation.working`,
              defaultMessage: `Working`,
              description: `Status of a conversation generating a response`,
            }),
          ],
        })),
        (n[0] = e))
      : (e = n[0]),
      (u = e));
  } else if (c) {
    let e;
    (n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, m.jsxs)(`span`, {
          className: `inline-flex items-center gap-1.5`,
          children: [
            (0, m.jsx)(i, { className: `text-info` }),
            (0, m.jsx)(t, {
              id: `localConversation.sideChat.unreadResponse`,
              defaultMessage: `Unread response`,
              description: `Accessible status announcing that a side chat has an unread response`,
            }),
          ],
        })),
        (n[1] = e))
      : (e = n[1]),
      (u = e));
  }
  let f;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, m.jsx)(o, {})), (n[2] = f))
    : (f = n[2]);
  let h;
  n[3] === a
    ? (h = n[4])
    : ((h = a ? { kind: `text`, content: a.slice(0, 600), lines: 4 } : null),
      (n[3] = a),
      (n[4] = h));
  let g;
  n[5] === h ? (g = n[6]) : ((g = [h]), (n[5] = h), (n[6] = g));
  let _;
  return (
    n[7] !== u || n[8] !== g || n[9] !== r
      ? ((_ = (0, m.jsx)(d, { icon: f, subtitle: u, title: r, sections: g })),
        (n[7] = u),
        (n[8] = g),
        (n[9] = r),
        (n[10] = _))
      : (_ = n[10]),
    _
  );
}
var p,
  m,
  h = e(() => {
    ((p = u()), r(), a(), n(), s(), (m = c()));
  });
export { h as n, f as t };
//# sourceMappingURL=conversation-2aefcc6a5de7.js.map
