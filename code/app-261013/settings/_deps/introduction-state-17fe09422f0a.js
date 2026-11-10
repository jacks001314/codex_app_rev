const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-request-fa6ed23073b0.js",
      "./app-initial-5851df3f6cb1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  EPt as r,
  Pxt as i,
  SPt as a,
  TLt as o,
  aSt as s,
  fPt as c,
  oSt as l,
  pLt as u,
  pPt as ee,
  rst as te,
  spt as d,
  wot as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Acn as p,
  C8t as m,
  C9t as h,
  CFr as g,
  D8t as _,
  Dar as ne,
  Dor as v,
  E8t as re,
  Ear as ie,
  NDr as ae,
  Ncn as y,
  Nln as b,
  O8t as x,
  OPr as S,
  Rln as C,
  S9t as w,
  T8t as T,
  XMr as E,
  iNr as D,
  jDr as O,
  jcn as k,
  k8t as A,
  kPr as j,
  rNr as M,
  tNr as N,
  w8t as P,
  w9t as F,
  wcn as oe,
  wor as I,
  xFr as L,
} from "./app-initial-5851df3f6cb1.js";
import { _ as R, g as z, h as B, u as V, v as H } from "./state-dc42f06f4898.js";
var U;
function W() {
  return (W = e(() => {
    (M(), (U = D(`space-landing-todo-pending-v1`, {})));
  }))();
}
function G(e, t) {
  let n = e.get(X);
  if (!(n?.key !== t || e.get(p, t))) {
    if (
      (e.set(Y, t, !1),
      e.get(x) === !1 && e.get(j, `2648108507`) && e.set(U, (e) => ({ ...e, [t]: !0 })),
      e.get(x) !== !0)
    ) {
      let r = h({ accountId: n.accountId, userId: e.get(E) });
      (r != null && F(e, r, { viewMode: `list` }), g(P, { entries: { [t]: { value: !0 } } }));
    }
    K(e);
  }
}
async function K(e) {
  let n = e.get(X);
  if (!e.get(y) || n == null || e.get(p, n.key) || e.get(A)[n.key] !== !0 || e.get(J, n.key)) return;
  let r = new AbortController(),
    i = e.watch(({ get: e }) => {
      (e(X)?.key !== n.key || e(v) !== n.accountId) && r.abort();
    }),
    a = e.query.snapshot(O);
  e.set(J, n.key, !0);
  try {
    let { Request: e } = await c(
      async () => {
        let { Request: e } = await import(`./chatgpt-request-fa6ed23073b0.js`);
        return { Request: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    );
    r.signal.throwIfAborted();
    let t = await e.safePost(`/settings/announcement_viewed`, {
      expectedIdentity: { accountId: n.accountId, userId: n.userId },
      additionalHeaders: { "ChatGPT-Account-ID": n.accountId, [d]: n.accountId },
      parameters: { query: { announcement_id: m } },
      signal: r.signal,
    });
    r.signal.throwIfAborted();
    let i = q.safeParse(t);
    if (!i.success) return;
    (g(P, { entries: { [n.key]: { value: i.data[m] } } }),
      await a.cancel(),
      a.setData((e) =>
        e == null ? e : { ...e, seenAnnouncements: { ...e.seenAnnouncements, [m]: i.data[m] } },
      ),
      a.getData() == null && !r.signal.aborted && (await a.invalidate()));
  } catch {
    r.signal.aborted || t.warning(`Failed to sync Space introduction viewed state`);
  } finally {
    (i(), e.set(J, n.key, !1));
  }
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (i(),
      te(),
      r(),
      T(),
      N(),
      ae(),
      w(),
      ie(),
      f(),
      S(),
      a(),
      L(),
      I(),
      W(),
      b(),
      V(),
      k(),
      oe(),
      ee(),
      (q = u({ [m]: o() })),
      (J = s(n, (e) => !1)),
      (Y = s(n, (e) => !1)),
      (X = l(n, ({ get: e }) => {
        let t = e(re);
        return t != null && t.accountId === e(v) ? t : null;
      })),
      (Z = l(n, ({ get: e }) => {
        let t = e(X);
        return e(y) && t != null && !e(p, t.key) && (e(_, t.key) || e(Y, t.key) || e(x) === !1);
      })),
      (Q = l(n, ({ get: e }) => {
        let t = e(z);
        return t != null &&
          !e(ne, `granola_presentation`) &&
          e(x) != null &&
          e(R) === !1 &&
          !e(Z) &&
          !e(p, t.key) &&
          e(B, t.key) === `available` &&
          e(C)[t.key] != null &&
          !e(H, t.key)
          ? t.key
          : null;
      })));
  }))();
}
export { Y as a, K as c, Z as i, W as l, G as n, J as o, X as r, Q as s, $ as t, U as u };
//# sourceMappingURL=introduction-state-17fe09422f0a.js.map
