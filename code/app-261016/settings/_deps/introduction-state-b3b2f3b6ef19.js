const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-request-19e53367f645.js",
      "./app-initial-ad16eaadf81f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  CCt as n,
  HFt as r,
  OFt as i,
  Qst as a,
  RFt as o,
  SCt as s,
  Smt as ee,
  VRt as c,
  ZSt as l,
  kFt as u,
  kRt as te,
  sct as d,
  zFt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as p,
  BRr as m,
  Dfn as h,
  Gnn as g,
  LLr as _,
  Npn as v,
  Opn as ne,
  Tfn as re,
  Unn as ie,
  Wnn as ae,
  cWt as y,
  dWt as b,
  eMr as x,
  fWt as S,
  gur as C,
  hlr as w,
  kLr as T,
  lBr as E,
  lWt as D,
  mlr as O,
  nMr as k,
  pWt as A,
  pur as j,
  sWt as M,
  uBr as N,
  uWt as P,
  vfn as oe,
  wLr as F,
  wfn as I,
  zLr as L,
} from "./app-initial-ad16eaadf81f.js";
import { _ as R, g as z, h as B, u as V, v as H } from "./state-cbddb42ae355.js";
var U;
function W() {
  return (W = e(() => {
    (T(), (U = p(`space-landing-todo-pending-v1`, {})));
  }))();
}
function G(e, t) {
  let n = e.get(X);
  if (!(n?.key !== t || e.get(I, t))) {
    if (
      (e.set(Y, t, !1),
      e.get(S) === !1 && e.get(N, `2648108507`) && e.set(U, (e) => ({ ...e, [t]: !0 })),
      e.get(S) !== !0)
    ) {
      let r = ae({ accountId: n.accountId, userId: e.get(m) });
      (r != null && g(e, r, { viewMode: `list` }), L(y, { entries: { [t]: { value: !0 } } }));
    }
    K(e);
  }
}
async function K(e) {
  let t = e.get(X);
  if (!e.get(h) || t == null || e.get(I, t.key) || e.get(A)[t.key] !== !0 || e.get(J, t.key)) return;
  let n = new AbortController(),
    r = e.watch(({ get: e }) => {
      (e(X)?.key !== t.key || e(C) !== t.accountId) && n.abort();
    }),
    a = e.query.snapshot(x);
  e.set(J, t.key, !0);
  try {
    let { Request: e } = await i(
      async () => {
        let { Request: e } = await import(`./chatgpt-request-19e53367f645.js`);
        return { Request: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    );
    n.signal.throwIfAborted();
    let r = await e.safePost(`/settings/announcement_viewed`, {
      expectedIdentity: { accountId: t.accountId, userId: t.userId },
      additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [ee]: t.accountId },
      parameters: { query: { announcement_id: M } },
      signal: n.signal,
    });
    n.signal.throwIfAborted();
    let o = q.safeParse(r);
    if (!o.success) return;
    (L(y, { entries: { [t.key]: { value: o.data[M] } } }),
      await a.cancel(),
      a.setData((e) =>
        e == null ? e : { ...e, seenAnnouncements: { ...e.seenAnnouncements, [M]: o.data[M] } },
      ),
      a.getData() == null && !n.signal.aborted && (await a.invalidate()));
  } catch {
    n.signal.aborted || f.warning(`Failed to sync Space introduction viewed state`);
  } finally {
    (r(), e.set(J, t.key, !1));
  }
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (l(),
      d(),
      r(),
      D(),
      F(),
      k(),
      ie(),
      O(),
      t(),
      E(),
      o(),
      _(),
      j(),
      W(),
      ne(),
      V(),
      re(),
      oe(),
      u(),
      (q = te({ [M]: c() })),
      (J = s(a, (e) => !1)),
      (Y = s(a, (e) => !1)),
      (X = n(a, ({ get: e }) => {
        let t = e(P);
        return t != null && t.accountId === e(C) ? t : null;
      })),
      (Z = n(a, ({ get: e }) => {
        let t = e(X);
        return e(h) && t != null && !e(I, t.key) && (e(b, t.key) || e(Y, t.key) || e(S) === !1);
      })),
      (Q = n(a, ({ get: e }) => {
        let t = e(z);
        return t != null &&
          !e(w, `granola_presentation`) &&
          e(S) != null &&
          e(R) === !1 &&
          !e(Z) &&
          !e(I, t.key) &&
          e(B, t.key) === `available` &&
          e(v)[t.key] != null &&
          !e(H, t.key)
          ? t.key
          : null;
      })));
  }))();
}
export { Y as a, K as c, Z as i, W as l, G as n, J as o, X as r, Q as s, $ as t, U as u };
//# sourceMappingURL=introduction-state-b3b2f3b6ef19.js.map
