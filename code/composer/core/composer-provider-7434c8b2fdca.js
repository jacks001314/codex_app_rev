import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  Dgt as i,
  Eln as a,
  N3 as o,
  O3t as s,
  Qit as c,
  Rht as l,
  Sln as u,
  Zit as d,
  _gt as f,
  a3t as p,
  akt as m,
  hmn as h,
  j3 as g,
  kmn as _,
  mOt as v,
  nln as y,
  o3t as b,
  pln as x,
  pq as S,
  rq as C,
  tkt as w,
  vOt as T,
  z3 as E,
} from "./app-initial-f094ef01c64d.js";
import { Cs as D, Ss as O } from "./app-primary-4c40d73a1074.js";
import { r as k } from "./thread-scroll-layout-4583603e4217.js";
import { n as A, r as j } from "./thread-scroll-controller-context-value-6a9e93eb1505.js";
function M(e) {
  let t = (0, P.c)(42),
    { initialPlacementKey: n, onResponseSpacerStateChange: r } = e,
    i = u(0),
    o = (0, F.useRef)(0),
    s = (0, F.useRef)(null),
    l = (0, F.useRef)(null),
    d = (0, F.useRef)(!1),
    f = j(),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => {
        (s.current != null && (window.cancelAnimationFrame(s.current), (s.current = null)),
          (o.current = 0));
      }),
      (t[0] = p))
    : (p = t[0]);
  let m = c(p),
    h;
  t[1] !== m || t[2] !== i
    ? ((h = () => {
        (m(), i.stop(), i.jump(0), (d.current = !1));
      }),
      (t[1] = m),
      (t[2] = i),
      (t[3] = h))
    : (h = t[3]);
  let g = c(h),
    _;
  t[4] !== g || t[5] !== f
    ? ((_ = () => {
        (g(), f.scrollToBottom());
      }),
      (t[4] = g),
      (t[5] = f),
      (t[6] = _))
    : (_ = t[6]);
  let v = c(_),
    y;
  t[7] !== i || t[8] !== f
    ? ((y = () => {
        let e = i.get();
        if (e <= 0) return ((d.current = !1), !1);
        let t = f.getLastScrollDistanceFromBottomPx(),
          n = t >= e;
        return !d.current && !n
          ? !1
          : (i.stop(),
            i.jump(0),
            (d.current = !1),
            f.scrollToDistanceFromBottomPx(Math.max(0, t - e), `instant`),
            !0);
      }),
      (t[7] = i),
      (t[8] = f),
      (t[9] = y))
    : (y = t[9]);
  let b = c(y),
    S;
  t[10] !== b || t[11] !== i
    ? ((S = (e) => {
        if (e <= 0) return;
        let t = i.get(),
          n = Math.max(0, t - e);
        (i.stop(), i.jump(n), b());
      }),
      (t[10] = b),
      (t[11] = i),
      (t[12] = S))
    : (S = t[12]);
  let C = c(S),
    w;
  t[13] === C
    ? (w = t[14])
    : ((w = () => {
        s.current = null;
        let e = o.current;
        ((o.current = 0), C(e));
      }),
      (t[13] = C),
      (t[14] = w));
  let T = c(w),
    E;
  t[15] !== m || t[16] !== i || t[17] !== f
    ? ((E = () => {
        let e = f.getScrollElement();
        if (e == null) return;
        let t = Math.max(0, e.clientHeight - N(e)) * L;
        (m(),
          i.stop(),
          (d.current = !1),
          i.get() <= 24 && i.jump(0),
          f.scrollToDistanceFromBottomPx(B, `instant`),
          x(i, t, V));
      }),
      (t[15] = m),
      (t[16] = i),
      (t[17] = f),
      (t[18] = E))
    : (E = t[18]);
  let D = c(E),
    O,
    k;
  (t[19] !== b || t[20] !== i || t[21] !== f
    ? ((O = () => {
        let e = f.getScrollElement(),
          t = l.current;
        if (e == null || t == null || typeof IntersectionObserver > `u`) return;
        let n = new IntersectionObserver(
          (t) => {
            let n = t.at(-1);
            if (n == null) return;
            let r = Math.max(0, n.intersectionRect.height - N(e));
            ((d.current = i.get() > 0 && r <= R), b());
          },
          { root: e, threshold: z },
        );
        return (
          n.observe(t),
          () => {
            n.disconnect();
          }
        );
      }),
      (k = [b, i, f]),
      (t[19] = b),
      (t[20] = i),
      (t[21] = f),
      (t[22] = O),
      (t[23] = k))
    : ((O = t[22]), (k = t[23])),
    (0, F.useLayoutEffect)(O, k));
  let A, M;
  (t[24] !== m || t[25] !== T || t[26] !== f
    ? ((A = () => {
        let e = f.addUserScrollListener((e, t) => {
          if (t == null) return;
          let n = e - t;
          n <= 0 || ((o.current += n), (s.current ??= window.requestAnimationFrame(T)));
        });
        return () => {
          (e(), m());
        };
      }),
      (M = [m, T, f]),
      (t[24] = m),
      (t[25] = T),
      (t[26] = f),
      (t[27] = A),
      (t[28] = M))
    : ((A = t[27]), (M = t[28])),
    (0, F.useLayoutEffect)(A, M));
  let H, U;
  (t[29] !== g || t[30] !== r || t[31] !== D || t[32] !== i || t[33] !== v
    ? ((H = () => (
        r({ clear: g, getHeightPx: () => i.get(), place: D, scrollToBottom: v }),
        () => {
          r(null);
        }
      )),
      (U = [g, r, D, i, v]),
      (t[29] = g),
      (t[30] = r),
      (t[31] = D),
      (t[32] = i),
      (t[33] = v),
      (t[34] = H),
      (t[35] = U))
    : ((H = t[34]), (U = t[35])),
    (0, F.useLayoutEffect)(H, U));
  let W, G;
  (t[36] !== n || t[37] !== D
    ? ((W = () => {
        n != null && D();
      }),
      (G = [n, D]),
      (t[36] = n),
      (t[37] = D),
      (t[38] = W),
      (t[39] = G))
    : ((W = t[38]), (G = t[39])),
    (0, F.useLayoutEffect)(W, G));
  let K;
  return (
    t[40] === i
      ? (K = t[41])
      : ((K = (0, I.jsx)(a.div, {
          "aria-hidden": !0,
          ref: l,
          className: `shrink-0`,
          style: { height: i },
        })),
        (t[40] = i),
        (t[41] = K)),
    K
  );
}
function N(e) {
  let t = Number.parseFloat(e.style.getPropertyValue(`--thread-scroll-padding-bottom`));
  return Number.isFinite(t) ? t : 0;
}
var P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    ((P = _()),
      y(),
      (F = t(r(), 1)),
      k(),
      A(),
      d(),
      (I = h()),
      (L = 2 / 3),
      (R = 1),
      (z = Array.from({ length: 101 }, (e, t) => t / 100)),
      (B = 1),
      (V = { type: `spring`, bounce: 0, duration: 0.5 }));
  });
function U(e) {
  let t = (0, W.c)(5),
    { conversationId: r } = e,
    a = n(p),
    { mutate: s } = S(),
    c,
    u;
  return (
    t[0] !== r || t[1] !== s || t[2] !== a
      ? ((c = () => {
          i(a, r, !0);
          let e = a.watch((e) => {
            let { get: t } = e,
              n = t(l, r);
            if (n == null || t(o, n) !== !0) return;
            let i = w(n);
            (T(a, i, a.get(E, i)), s(n));
          });
          return () => {
            (e(), i(a, r, !1));
          };
        }),
        (u = [r, s, a]),
        (t[0] = r),
        (t[1] = s),
        (t[2] = a),
        (t[3] = c),
        (t[4] = u))
      : ((c = t[3]), (u = t[4])),
    (0, G.useEffect)(c, u),
    null
  );
}
var W,
  G,
  K = e(() => {
    ((W = _()), s(), (G = t(r(), 1)), C(), b(), v(), g(), m(), f());
  });
function q(e) {
  let t = (0, Y.c)(3),
    { children: n } = e,
    [r] = (0, X.useState)(J),
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = (0, Z.jsx)(O, { value: r, children: n })), (t[0] = r), (t[1] = n), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function J() {
  let e = null,
    t = new Set(),
    n = (n) => {
      e = n;
      for (let e of t) e();
    };
  return {
    getSnapshot: () => e,
    subscribe: (e) => (
      t.add(e),
      () => {
        t.delete(e);
      }
    ),
    register: (t) => (
      n(t),
      () => {
        e === t && n(null);
      }
    ),
  };
}
var Y,
  X,
  Z,
  Q = e(() => {
    ((Y = _()), (X = t(r(), 1)), D(), (Z = h()));
  });
export { M as a, K as i, Q as n, H as o, U as r, q as t };
//# sourceMappingURL=composer-provider-7434c8b2fdca.js.map
