import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Pxt as n,
  Vxt as r,
  oSt as i,
  vzt as a,
  xMt as o,
  yMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as l,
  Dor as u,
  gwr as d,
  htt as f,
  iqt as p,
  ltt as m,
  oqt as h,
  tqt as g,
  utt as _,
  xsn as v,
} from "./app-initial-5851df3f6cb1.js";
import { n as y, t as b } from "./content-quick-chat-overlay-fae2ee1c31a8.js";
import { n as x, t as S } from "./quick-chat-floating-surface-51ff4a9417a5.js";
import { i as C, t as w } from "./launch-defaults-a1836c062b43.js";
import { r as T, t as E } from "./template-setup-chat-bb52ad9352ed.js";
function D(e) {
  let n = (0, k.c)(6),
    i = t(d),
    a = r(h),
    o,
    s;
  if (
    (n[0] !== a || n[1] !== i
      ? ((o = () => {
          a != null && _(i);
        }),
        (s = [a, i]),
        (n[0] = a),
        (n[1] = i),
        (n[2] = o),
        (n[3] = s))
      : ((o = n[2]), (s = n[3])),
    (0, A.useLayoutEffect)(o, s),
    a == null)
  )
    return null;
  let c;
  return (n[4] === a ? (c = n[5]) : ((c = (0, M.jsx)(O, { pageId: a }, a)), (n[4] = a), (n[5] = c)), c);
}
function O(e) {
  let n = (0, k.c)(15),
    { pageId: i } = e,
    a = t(d),
    o = r(u),
    s = r(N),
    c;
  n[0] !== o || n[1] !== i || n[2] !== a
    ? ((c = () => a.get(C, { accountId: o, pageId: i })), (n[0] = o), (n[1] = i), (n[2] = a), (n[3] = c))
    : (c = n[3]);
  let [l] = (0, A.useState)(c),
    p = r(f);
  if (l) {
    let e = p === !1,
      t;
    n[4] === a
      ? (t = n[5])
      : ((t = (e) => {
          a.set(f, !e);
        }),
        (n[4] = a),
        (n[5] = t));
    let r;
    n[6] === i ? (r = n[7]) : ((r = () => (0, M.jsx)(E, { pageId: i }, i)), (n[6] = i), (n[7] = r));
    let o;
    return (
      n[8] !== e || n[9] !== t || n[10] !== r || n[11] !== s
        ? ((o = (0, j.createPortal)(
            (0, M.jsx)(`div`, {
              className: `pointer-events-none fixed inset-0 z-50 zoom-adjusted-viewport`,
              children: (0, M.jsx)(S, {
                presentation: `compact`,
                showHeader: !1,
                isMinimized: e,
                onMinimizedChange: t,
                title: s,
                children: r,
              }),
            }),
            document.body,
          )),
          (n[8] = e),
          (n[9] = t),
          (n[10] = r),
          (n[11] = s),
          (n[12] = o))
        : (o = n[12]),
      o
    );
  }
  let m;
  return (
    n[13] === i
      ? (m = n[14])
      : ((m = (0, M.jsx)(b, {
          composerOnly: !0,
          reserveFullComposerHeight: !0,
          children: () => (0, M.jsx)(E, { pageId: i }, i),
        })),
        (n[13] = i),
        (n[14] = m)),
    m
  );
}
var k, A, j, M, N;
function P() {
  return (P = e(() => {
    ((k = a()),
      n(),
      (A = c()),
      (j = s()),
      w(),
      v(),
      y(),
      x(),
      l(),
      m(),
      T(),
      g(),
      (M = o()),
      (N = i(d, ({ get: e }) => {
        let t = e(p);
        return t?.presentation === `draft` ? t.title : ``;
      })));
  }))();
}
export { P as n, D as t };
//# sourceMappingURL=template-draft-chat-8afe3a02063f.js.map
