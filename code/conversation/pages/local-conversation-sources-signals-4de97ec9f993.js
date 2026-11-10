import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  FEt as n,
  HTt as r,
  O3t as i,
  PEt as a,
  SEt as o,
  TTt as s,
  VTt as c,
  Vnn as l,
  Vwt as u,
  _Et as d,
  a3t as f,
  cOt as p,
  i6t as m,
  mEt as h,
  o3t as g,
  rTt as _,
  sOt as v,
  u6t as y,
} from "./app-initial-f094ef01c64d.js";
function b(e, t) {
  return e == null || t == null
    ? e === t
    : e.turnId === t.turnId &&
        e.status === t.status &&
        e.params.threadId === t.params.threadId &&
        (0, S.default)(e.params.input, t.params.input) &&
        (0, S.default)(e.params.attachments, t.params.attachments) &&
        (0, S.default)(x(e), x(t));
}
function x(e) {
  return a(e.items).filter(
    (e) =>
      e.type === `userMessage` ||
      e.type === `steeringUserMessage` ||
      e.type === `webSearch` ||
      e.type === `mcpToolCall`,
  );
}
var S,
  C,
  w,
  T,
  E,
  D = e(() => {
    ((S = t(l(), 1)),
      i(),
      _(),
      n(),
      g(),
      p(),
      (C = y(f, (e) => new WeakMap(), { owner: (e) => e?.threadId })),
      (w = m(
        f,
        (e, { get: t }) => {
          if (e == null) return null;
          let n = t(h, { hostId: t(c, e), threadId: e });
          if (n == null) return (t(r, e), t(d, e), t(o, e)?.slice(0, -1) ?? null);
          let i = n.flatMap((e) => (e.type === `content` ? [e.value] : [])),
            a = [];
          for (let n of i.slice(0, -1)) {
            let r = t(u, { conversationId: e, entityKey: n });
            if (r == null) return t(o, e)?.slice(0, -1) ?? null;
            a.push(r);
          }
          return a;
        },
        { isEqual: (e, t) => (e == null || t == null ? e === t : v(e, t)) },
      )),
      (T = m(f, (e, { get: t }) => t(s, e), { isEqual: b })),
      (E = m(
        f,
        (e, { get: t }) => {
          if (e == null) return null;
          let n = t(w, e) ?? [],
            r = t(T, e);
          return r == null ? n : [...n, r];
        },
        {
          isEqual: (e, t) =>
            e == null || t == null
              ? e === t
              : e.length === t.length && e.every((e, n) => e === t[n] || b(e, t[n])),
        },
      )));
  });
export { C as i, D as n, w as r, E as t };
//# sourceMappingURL=local-conversation-sources-signals-4de97ec9f993.js.map
