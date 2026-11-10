import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HNt as n,
  Out as r,
  Pxt as i,
  nSt as a,
  vzt as o,
  xMt as s,
  zxt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ban as l,
  DZn as u,
  FZn as d,
  GVn as f,
  JZn as p,
  Jyr as m,
  NQn as h,
  PQn as g,
  QSr as _,
  Ran as v,
  Uyr as y,
  VZn as b,
  Xyr as x,
  Yyr as S,
  ZSr as C,
  bZn as w,
  cyn as T,
  fXn as E,
  lyn as D,
  mXn as O,
  qVn as k,
  yjn as A,
} from "./app-initial-5851df3f6cb1.js";
import { $v as j, ny as M } from "./app-primary-fe8a450b3b04.js";
import { n as N, t as P } from "./conversation-a27aae5d4454.js";
function F(e) {
  let t = (0, I.c)(4),
    { conversationId: n, title: r, draft: i } = e,
    a = c(B, n),
    o;
  return (
    t[0] !== i || t[1] !== a || t[2] !== r
      ? ((o = (0, z.jsx)(P, { title: r, draft: i, ...a })), (t[0] = i), (t[1] = a), (t[2] = r), (t[3] = o))
      : (o = t[3]),
    o
  );
}
var I, L, R, z, B;
function V() {
  return (V = e(() => {
    ((I = o()),
      (L = t(r(), 1)),
      (R = t(n(), 1)),
      i(),
      m(),
      C(),
      N(),
      D(),
      k(),
      l(),
      A(),
      h(),
      O(),
      M(),
      (z = s()),
      (B = a(
        T,
        (e, { get: t }) => {
          let n = t(f, e),
            r = t(b, e),
            i = p(r),
            a = (0, L.default)(n, (e) => g(e) && !x(e)),
            o = n?.[a],
            s = (0, L.default)(
              n,
              (e) =>
                e.author.role === `assistant` &&
                (e.channel == null || e.channel === `final` || (i && e.channel === `commentary`)) &&
                !S(e) &&
                !x(e),
            ),
            c = s > a ? n?.[s] : null,
            l = { type: i ? `loading` : `idle`, unread: t(t(w, e) === `tpp` ? u : v, e) };
          (r === `error` || t(d, e) != null) && (l.type = `error`);
          let m = null;
          t(j, e) != null && (m = `waitingOnUserInput`);
          let h = n?.at(-1),
            C = h == null || x(h) ? null : E(h);
          return (
            C != null && C.request?.type !== `preview` && (m = `waitingOnApproval`),
            {
              waitingFor: m,
              statusState: l,
              requestExcerpt: o == null ? null : _(y(o).slice(0, 1e3)),
              responseExcerpt: c == null ? null : _(y(c).slice(0, 1e3)),
            }
          );
        },
        { isEqual: R.default },
      )));
  }))();
}
V();
export { F as RegisteredChatGptEntityThumbnail };
//# sourceMappingURL=entity-752c8d649e33.js.map
