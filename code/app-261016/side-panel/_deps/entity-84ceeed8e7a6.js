import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Idt as n,
  LNt as r,
  PBt as i,
  ZSt as a,
  iFt as o,
  nCt as s,
  yCt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Cr as l,
  Lln as u,
  N$n as d,
  QCr as f,
  VPn as p,
  c0n as m,
  cGn as h,
  e0n as g,
  ewr as _,
  j$n as v,
  m0n as y,
  mDr as b,
  mSn as x,
  o2n as S,
  pDr as C,
  pSn as w,
  q1n as T,
  qCr as E,
  s2n as D,
  uGn as O,
  x0n as k,
  zln as A,
} from "./app-initial-ad16eaadf81f.js";
import { wy as j, xy as M } from "./app-primary-3e00728c2a4c.js";
import { n as N, t as P } from "./conversation-d1c3cb59a3b4.js";
function F(e) {
  let t = (0, I.c)(4),
    { conversationId: n, title: r, draft: i } = e,
    a = s(B, n),
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
    ((I = i()),
      (L = t(n(), 1)),
      (R = t(o(), 1)),
      a(),
      f(),
      C(),
      N(),
      x(),
      O(),
      A(),
      p(),
      S(),
      d(),
      j(),
      (z = r()),
      (B = c(
        w,
        (e, { get: t }) => {
          let n = t(h, e),
            r = t(y, e),
            i = k(r),
            a = (0, L.default)(n, (e) => D(e) && !_(e)),
            o = n?.[a],
            s = (0, L.default)(
              n,
              (e) =>
                e.author.role === `assistant` &&
                (e.channel == null || e.channel === `final` || (i && e.channel === `commentary`)) &&
                !l(e) &&
                !_(e),
            ),
            c = s > a ? n?.[s] : null,
            d = { type: i ? `loading` : `idle`, unread: t(t(T, e) === `tpp` ? g : u, e) };
          (r === `error` || t(m, e) != null) && (d.type = `error`);
          let f = null;
          t(M, e) != null && (f = `waitingOnUserInput`);
          let p = n?.at(-1),
            x = p == null || _(p) ? null : v(p);
          return (
            x != null && x.request?.type !== `preview` && (f = `waitingOnApproval`),
            {
              waitingFor: f,
              statusState: d,
              requestExcerpt: o == null ? null : b(E(o).slice(0, 1e3)),
              responseExcerpt: c == null ? null : b(E(c).slice(0, 1e3)),
            }
          );
        },
        { isEqual: R.default },
      )));
  }))();
}
V();
export { F as RegisteredChatGptEntityThumbnail };
//# sourceMappingURL=entity-84ceeed8e7a6.js.map
