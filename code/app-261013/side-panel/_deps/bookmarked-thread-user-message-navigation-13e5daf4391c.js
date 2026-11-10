const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./thread-user-message-navigation-rail-app-fe19c161eb22.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./thread-scroll-controller-context-value-f766898c7055.js",
      "./thread-user-message-navigation-rail-62e0ef87d48f.js",
      "./plan-implementation-request-0cd55f1ae7b1.js",
      "./commit-84ced40b6cf4.js",
      "./pull-request-4cb305c7fdb2.js",
      "./floating-navigation-rail-2c6605aa8018.js",
      "./floating-navigation-rail-17bd6c59412b.css",
      "./thread-user-message-navigation-rail-9057905bb670.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Ixt as n,
  Pxt as r,
  bz as i,
  fPt as a,
  pPt as o,
  vzt as s,
  xMt as c,
  xz as l,
  yzt as u,
  z4 as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as p,
  S_ as m,
  b_ as h,
  eDr as g,
  gwr as _,
  nDr as v,
  x_ as y,
  y_ as b,
} from "./app-initial-5851df3f6cb1.js";
import { n as x, r as S } from "./thread-scroll-controller-context-value-f766898c7055.js";
function C(e) {
  let t = (0, j.c)(12),
    { enabled: n, getItems: r, onBookmarkChange: i, onPreviewItem: a, onRevealItem: o } = e,
    s = n === void 0 || n,
    { getScrollElement: c, holdViewport: u } = S(),
    d = T(s),
    f;
  if (
    (t[0] !== r || t[1] !== c || t[2] !== u || t[3] !== o
      ? ((f = (e) => {
          if (
            e.defaultPrevented ||
            !e.altKey ||
            e.shiftKey ||
            e.ctrlKey ||
            e.metaKey ||
            (e.key !== `ArrowUp` && e.key !== `ArrowDown`)
          )
            return;
          let t = c(),
            n = e.target instanceof Element ? e.target.closest(`.thread-scroll-container`) : null;
          if (t == null || (n != null && n !== t)) return;
          let i = E(r(), t, e.key === `ArrowUp` ? `previous` : `next`);
          if (i == null) return;
          let a = D(t, i.id);
          if (a != null) {
            (e.preventDefault(), u(), A(t, a));
            return;
          }
          o != null && (e.preventDefault(), u(), O(t, i, o));
        }),
        (t[0] = r),
        (t[1] = c),
        (t[2] = u),
        (t[3] = o),
        (t[4] = f))
      : (f = t[4]),
    w(l(f)),
    !s || !d)
  )
    return null;
  let p;
  t[5] === r ? (p = t[6]) : ((p = r()), (t[5] = r), (t[6] = p));
  let m;
  return (
    t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== p
      ? ((m = (0, N.jsx)(P, { items: p, onBookmarkChange: i, onPreviewItem: a, onRevealItem: o })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = p),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function w(e) {
  let t = (0, j.c)(3),
    n,
    r;
  (t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : ((n = () => (
        document.addEventListener(`keydown`, e),
        () => {
          document.removeEventListener(`keydown`, e);
        }
      )),
      (r = [e]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r)),
    (0, M.useEffect)(n, r));
}
function T(e) {
  let t = (0, j.c)(4),
    [n, r] = (0, M.useState)(!1),
    i,
    a;
  return (
    t[0] !== e || t[1] !== n
      ? ((i = () => {
          if (!e || n) return;
          let t = () => {
              r(!0);
            },
            i = window.requestIdleCallback?.bind(window),
            a = window.cancelIdleCallback?.bind(window);
          if (i && a) {
            let e = i(t, { timeout: 2e3 });
            return () => {
              a(e);
            };
          }
          let o = globalThis.setTimeout(t, 0);
          return () => {
            globalThis.clearTimeout(o);
          };
        }),
        (a = [e, n]),
        (t[0] = e),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : ((i = t[2]), (a = t[3])),
    (0, M.useEffect)(i, a),
    n
  );
}
function E(e, t, n) {
  let r = new Map();
  for (let e of t.querySelectorAll(`[data-content-search-unit-key]`)) {
    let t = e.dataset.contentSearchUnitKey;
    t != null && !r.has(t) && r.set(t, e);
  }
  let i = e.flatMap((e, t) => {
    let n = r.get(e.id),
      i = n?.querySelector(`[data-user-message-bubble]`) ?? n?.querySelector(R) ?? n;
    return i == null ? [] : [{ element: i, index: t, item: e }];
  });
  if (i.length === 0) return n === `next` ? (e[0] ?? null) : (e.at(-1) ?? null);
  let a = t.getBoundingClientRect().top;
  if (n === `next`) {
    let t = i.findIndex(({ element: e }) => e.getBoundingClientRect().top > a + F);
    return t === -1 ? (e[(i.at(-1)?.index ?? -1) + 1] ?? null) : (e[(i[t - 1]?.index ?? -1) + 1] ?? null);
  }
  for (let t = i.length - 1; t >= 0; --t) {
    let n = i[t],
      r = n.element.getBoundingClientRect();
    if (Math.abs(r.top - a) <= F) return e[n.index - 1] ?? null;
    if (r.top < a) return n.item;
  }
  return i[0]?.item ?? null;
}
function D(e, t) {
  for (let n of e.querySelectorAll(`[data-content-search-unit-key]`))
    if (n.dataset.contentSearchUnitKey === t) {
      let e = n.querySelector(`[data-user-message-bubble]`);
      if (e != null) return { measureElement: e, scrollElement: n };
      let t = n.querySelector(R);
      return t == null ? { measureElement: n, scrollElement: n } : { measureElement: t, scrollElement: t };
    }
  return null;
}
async function O(e, t, n) {
  await n(t);
  let r = await k(e, t.id);
  r != null && A(e, r);
}
function k(e, t) {
  let n = performance.now();
  return new Promise((r) => {
    let i = () => {
      let a = e.isConnected ? D(e, t) : null;
      if (a != null || !e.isConnected || performance.now() - n > L) {
        r(a);
        return;
      }
      window.requestAnimationFrame(i);
    };
    i();
  });
}
function A(e, t) {
  (t.scrollElement.scrollIntoView({ behavior: `smooth`, block: `start` }),
    window.setTimeout(() => {
      if (!e.isConnected || !t.measureElement.isConnected || !t.scrollElement.isConnected) return;
      let n = e.getBoundingClientRect().top,
        r = t.measureElement.getBoundingClientRect().top;
      Math.abs(r - n) <= F || t.scrollElement.scrollIntoView({ behavior: `smooth`, block: `start` });
    }, I));
}
var j, M, N, P, F, I, L, R;
function z() {
  return (z = e(() => {
    ((j = s()),
      (M = u()),
      d(),
      i(),
      x(),
      (N = c()),
      o(),
      (P = t(
        async () =>
          (
            await a(
              async () => {
                let { AppThreadUserMessageNavigationRail: e } = await import(
                  `./thread-user-message-navigation-rail-app-fe19c161eb22.js`
                );
                return { AppThreadUserMessageNavigationRail: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
              import.meta.url,
            )
          ).AppThreadUserMessageNavigationRail,
        { propagateLoadError: !0 },
      )),
      (F = 24),
      (I = 350),
      (L = 1500),
      (R = `[aria-label="User attachment"], img[alt="User attachment"]`));
  }))();
}
function B(e) {
  let t = (0, H.c)(17),
    r,
    i,
    a;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : (({ bookmarkKey: r, getItems: i, ...a } = e), (t[0] = e), (t[1] = r), (t[2] = i), (t[3] = a));
  let o = n(_),
    s = v(b),
    c = f(h, s ? r : null),
    l;
  t[4] !== c || t[5] !== i
    ? ((l = () => {
        let e = i();
        if (c.size === 0) return e;
        let t = new Set(c);
        return e.map((e) => {
          let n = V(e.turnKey);
          return t.delete(n) || c.has(e.bookmarkId ?? e.id) ? { ...e, isBookmarked: !0 } : e;
        });
      }),
      (t[4] = c),
      (t[5] = i),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== r || t[8] !== c || t[9] !== i || t[10] !== s || t[11] !== o
    ? ((u =
        s && r != null
          ? (e, t) => {
              m(o, r, e.bookmarkId ?? e.id, t);
              let n = V(e.turnKey);
              !t && c.has(n) && i().find((e) => V(e.turnKey) === n)?.id === e.id && m(o, r, n, !1);
            }
          : void 0),
      (t[7] = r),
      (t[8] = c),
      (t[9] = i),
      (t[10] = s),
      (t[11] = o),
      (t[12] = u))
    : (u = t[12]);
  let d;
  return (
    t[13] !== a || t[14] !== l || t[15] !== u
      ? ((d = (0, U.jsx)(C, { ...a, getItems: l, onBookmarkChange: u })),
        (t[13] = a),
        (t[14] = l),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
function V(e) {
  let t = e.indexOf(`:transcript:`);
  return t === -1 ? e : e.slice(0, t);
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = s()), r(), p(), g(), y(), z(), (U = c()));
  }))();
}
export { W as n, B as t };
//# sourceMappingURL=bookmarked-thread-user-message-navigation-13e5daf4391c.js.map
