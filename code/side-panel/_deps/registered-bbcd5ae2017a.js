import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Mwt as n,
  N3t as r,
  O3t as i,
  Q0t as a,
  SVt as o,
  Xwt as s,
  Z0t as c,
  aL as l,
  hmn as u,
  k5t as d,
  kmn as f,
  oL as p,
  rTt as m,
  s6t as h,
  vVt as g,
} from "./app-initial-f094ef01c64d.js";
import { n as _, t as v } from "./conversation-2aefcc6a5de7.js";
function y(e) {
  let t = (0, b.c)(6),
    { conversationId: n, hostId: i, title: a } = e,
    o;
  t[0] !== n || t[1] !== i
    ? ((o = { conversationId: n, hostId: i }), (t[0] = n), (t[1] = i), (t[2] = o))
    : (o = t[2]);
  let s = r(C, o),
    c;
  return (
    t[3] !== s || t[4] !== a
      ? ((c = s == null ? null : (0, S.jsx)(v, { title: a, ...s })),
        (t[3] = s),
        (t[4] = a),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
var b,
  x,
  S,
  C,
  w = e(() => {
    ((b = f()),
      (x = t(d(), 1)),
      i(),
      c(),
      m(),
      o(),
      _(),
      p(),
      (S = u()),
      (C = h(l, ({ conversationId: e, hostId: t }, { scope: r }) => {
        if (e == null) return null;
        let i = (t == null ? s(r, e) : r.get(n, t))?.getConversation(e);
        if (i == null) return null;
        let o = g(i),
          c = (0, x.default)(o?.items, (e) => e?.type === `agentMessage`),
          l = o?.status === `inProgress`;
        return (
          (i.unconfirmedTurnSubmissions?.length ?? 0) > 0
            ? (l = !0)
            : i.resumeState === `needs_resume`
              ? (l = i.threadRuntimeStatus?.type === `active`)
              : (o ?? (l = i.resumeState === `resuming`)),
          {
            responseExcerpt: c?.type === `agentMessage` ? a(c.text.slice(0, 1e3)) : null,
            isResponseInProgress: l,
            hasUnreadResponse: i.hasUnreadTurn,
          }
        );
      })));
  });
export { w as n, y as t };
//# sourceMappingURL=registered-bbcd5ae2017a.js.map
