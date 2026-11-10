import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CCt as n,
  FBt as r,
  FNt as i,
  LNt as a,
  PBt as o,
  ZSt as s,
  iCt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Fnt as l,
  GVt as u,
  Int as d,
  JVt as f,
  MOr as p,
  Vnt as m,
  XVt as h,
  gur as g,
  hdn as _,
  zOr as v,
} from "./app-initial-ad16eaadf81f.js";
import { n as y, t as b } from "./content-chat-surface-4e82aae84549.js";
import { n as x, t as S } from "./floating-chat-surface-1eaefa25765a.js";
import { i as C, t as w } from "./launch-defaults-e46725326fa9.js";
import { r as T, t as E } from "./template-setup-chat-6d8582e868cb.js";
function D(e) {
  let n = (0, k.c)(6),
    r = t(p),
    i = c(h),
    a,
    o;
  if (
    (n[0] !== i || n[1] !== r
      ? ((a = () => {
          i != null && d(r);
        }),
        (o = [i, r]),
        (n[0] = i),
        (n[1] = r),
        (n[2] = a),
        (n[3] = o))
      : ((a = n[2]), (o = n[3])),
    (0, A.useLayoutEffect)(a, o),
    i == null)
  )
    return null;
  let s;
  return (n[4] === i ? (s = n[5]) : ((s = (0, M.jsx)(O, { pageId: i }, i)), (n[4] = i), (n[5] = s)), s);
}
function O(e) {
  let n = (0, k.c)(15),
    { pageId: r } = e,
    i = t(p),
    a = c(g),
    o = c(N),
    s;
  n[0] !== a || n[1] !== r || n[2] !== i
    ? ((s = () => i.get(C, { accountId: a, pageId: r })), (n[0] = a), (n[1] = r), (n[2] = i), (n[3] = s))
    : (s = n[3]);
  let [l] = (0, A.useState)(s),
    u = c(m);
  if (l) {
    let e = u === !1,
      t;
    n[4] === i
      ? (t = n[5])
      : ((t = (e) => {
          i.set(m, !e);
        }),
        (n[4] = i),
        (n[5] = t));
    let a;
    n[6] === r ? (a = n[7]) : ((a = () => (0, M.jsx)(E, { pageId: r }, r)), (n[6] = r), (n[7] = a));
    let s;
    return (
      n[8] !== e || n[9] !== t || n[10] !== a || n[11] !== o
        ? ((s = (0, j.createPortal)(
            (0, M.jsx)(`div`, {
              className: `pointer-events-none fixed inset-0 z-50 zoom-adjusted-viewport`,
              children: (0, M.jsx)(S, {
                presentation: `compact`,
                showHeader: !1,
                isMinimized: e,
                onMinimizedChange: t,
                title: o,
                children: a,
              }),
            }),
            document.body,
          )),
          (n[8] = e),
          (n[9] = t),
          (n[10] = a),
          (n[11] = o),
          (n[12] = s))
        : (s = n[12]),
      s
    );
  }
  let d;
  return (
    n[13] === r
      ? (d = n[14])
      : ((d = (0, M.jsx)(b, {
          composerOnly: !0,
          reserveFullComposerHeight: !0,
          children: () => (0, M.jsx)(E, { pageId: r }, r),
        })),
        (n[13] = r),
        (n[14] = d)),
    d
  );
}
var k, A, j, M, N;
function P() {
  return (P = e(() => {
    ((k = o()),
      s(),
      (A = r()),
      (j = i()),
      y(),
      x(),
      w(),
      _(),
      v(),
      l(),
      T(),
      u(),
      (M = a()),
      (N = n(p, ({ get: e }) => {
        let t = e(f);
        return t?.presentation === `draft` ? t.title : ``;
      })));
  }))();
}
export { P as n, D as t };
//# sourceMappingURL=template-draft-chat-b75e6459498c.js.map
