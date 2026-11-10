import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, CCt as n, Qst as r, ZSt as i, yCt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as o,
  Aot as s,
  DNr as c,
  GNr as l,
  Gvr as ee,
  K_r as te,
  LNr as u,
  MNr as d,
  NPr as f,
  RCn as p,
  RNr as m,
  VRr as h,
  Wvr as g,
  Ycr as ne,
  Z_r as re,
  _Pr as _,
  ePr as v,
  jot as y,
  kPr as b,
  lBr as x,
  lPr as S,
  mBr as C,
  njr as ie,
  tjr as ae,
  vNr as w,
  wLr as oe,
  xLr as se,
  yNr as ce,
  zCn as le,
  zRr as ue,
} from "./app-initial-ad16eaadf81f.js";
import {
  _ as de,
  a as T,
  d as fe,
  g as E,
  l as D,
  n as O,
  o as k,
  p as A,
  r as j,
  s as M,
} from "./state-b5960488bc9f.js";
import { n as N, t as P } from "./team-state-2d8a57dd2e66.js";
function F(e) {
  return e.aeon_id != null;
}
var I;
function L() {
  return (L = e(() => {
    (i(), y(), ee(), te(), t(), x(), (I = n(r, ({ get: e }) => !e(C) && e(s).isCapable && (e(re) || e(g)))));
  }))();
}
function R(e) {
  return A(e).map((e) => {
    switch (e) {
      case `active`:
        return `scheduled`;
      case `paused`:
        return `paused`;
      case `completed`:
        return `finished`;
    }
  });
}
async function z(e, t) {
  if (!e.get(s).isCapable) return;
  let n = e.get(w);
  await Promise.all(
    R(t).map(async (t) => {
      try {
        for (await e.query.getOrFetch(d, t); e.get(w) === n;) {
          let n = e.get(d, t);
          if (!n.hasNextPage || n.isError) return;
          await n.fetchNextPage({ cancelRefetch: !1 });
        }
      } catch {}
    }),
  );
}
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (i(),
      ie(),
      oe(),
      p(),
      f(),
      c(),
      y(),
      o(),
      t(),
      de(),
      L(),
      O(),
      P(),
      u(),
      l(),
      (B = n(r, ({ get: e }) => {
        if (e(s).isLoading || e(h).accountLoading || e(se).status === `loading`) return null;
        let t = e(w);
        if (t == null || !e(s).isCapable || !e(v, t)) return !1;
        let n = e(S, t).data;
        return n == null ? null : n.length > 0;
      })),
      (V = n(r, ({ get: e }) => {
        let t = e(w),
          n = e(T, t);
        if (n === `orbit`) return e(I) ? n : `all`;
        if ((n === `team` || typeof n == `object`) && e(v, t)) {
          let r = typeof n == `object` ? n.teamId : null,
            i = e(S, t).data;
          return i?.length === 0
            ? `all`
            : r == null || i == null || i.some((e) => e.id === r)
              ? `team`
              : `all`;
        }
        return n === `personal` ? n : `all`;
      })),
      (H = n(r, ({ get: e }) => {
        let t = e(ae, { name: `automations.local` }).isCapable ? e(le).data : void 0,
          n = e(s).isCapable ? e(d, `scheduled`).data : void 0;
        return (
          (t?.items.some((e) => e.status === `ACTIVE`) ?? !1) ||
          (n?.pages.some((e) => e.items.some((e) => e.team_id == null && !F(e) && b(e) === `active`)) ?? !1)
        );
      })),
      (U = n(r, ({ get: e }) => e(fe, e(ue)) ?? `all`)),
      (W = n(r, ({ get: e }) => {
        let t = E(e(ne)),
          n = e(w);
        if (
          t?.source !== `cloud` ||
          n == null ||
          (t.accountId != null && t.accountId !== n) ||
          !e(s).isCapable
        )
          return;
        let r = e(ce, t.automationId).data;
        return r != null && b(r.automation) === `paused` ? r : void 0;
      })),
      (G = a(r, (e, { get: t }) => {
        let n = t(m, e.accountId).data;
        return (
          n?.accountId === e.accountId &&
          n.items.some((t) => t.teamId === e.teamId && b(t.automation) === `active`)
        );
      })),
      (K = a(r, (e, { get: t }) =>
        e.personalGroup == null
          ? e.assistant
            ? t(j, e.accountId)
            : e.teamId == null
              ? (t(k, e.accountId) ?? (t(B) === !0 && !t(H)))
              : (t(N, e.accountId)[e.teamId] ?? !t(G, { accountId: e.accountId, teamId: e.teamId }))
          : t(M, { accountId: e.accountId, group: e.personalGroup }),
      )),
      (q = a(r, (e, { get: t }) => {
        let n = t(s).isCapable ? R(e).map((e) => t(d, e)) : [];
        return {
          items:
            A(e).length === 0 || n.some(({ data: e }) => e != null)
              ? n.flatMap(({ data: e }) => e?.pages.flatMap((e) => e.items) ?? [])
              : void 0,
          isLoading: n.some(({ isLoading: e }) => e),
          isError: n.some(({ error: e }) => e != null),
          isIdle: n.every(({ fetchStatus: e }) => e === `idle`),
          isExhausted: n.every(({ data: e, hasNextPage: t }) => e != null && !t),
          hasNextPage: n.some(({ hasNextPage: e }) => e),
          isFetchingNextPage: n.some(({ isFetchingNextPage: e }) => e),
          fetchNextPage: async () => {
            await n.find(({ hasNextPage: e }) => e)?.fetchNextPage({ cancelRefetch: !1 });
          },
          retry: async () => {
            await Promise.all(
              n.map(({ isFetchNextPageError: e, fetchNextPage: t, refetch: n }) => (e ? t() : n())),
            );
          },
        };
      })),
      (J = a(r, (e, { get: t }) => {
        let n = t(
          q,
          e.group == null
            ? e.status
            : A(e.status).filter((t) => (e.group === `active` ? t === `active` : t !== `active`)),
        );
        return {
          hasNextPage: n.hasNextPage,
          isFetchingNextPage: n.isFetchingNextPage,
          fetchNextPage: n.fetchNextPage,
        };
      })),
      (Y = a(r, (e, { get: t }) => {
        let n = t(w);
        if (n == null || !t(s).isCapable) return;
        let { items: r } = t(q, e),
          i = t(m, n).data,
          a = t(W);
        if (r == null && i == null && a == null) return;
        let o = t(v, n),
          c = o && i?.accountId === n ? i.items : [],
          l = new Map(c.map(({ automation: e, teamId: t }) => [e.id, t]));
        return _(
          [...(r ?? []), ...(a == null ? [] : [a.automation])],
          c.map(({ automation: e }) => e),
        )
          .map((e) => ({ ...e, teamId: l.get(e.automation.id) ?? e.automation.team_id ?? void 0 }))
          .filter((t) => {
            if (t.teamId != null && !o) return !1;
            let n = b(t.automation),
              r = A(e);
            return r.includes(n) || (r.length > 0 && n === `paused` && t.automation.id === a?.automation.id);
          });
      })),
      (X = n(r, ({ get: e }) => {
        let t = e(w);
        if (!e(v, t)) return;
        let n = e(S, t).data,
          r = e(Y, e(U));
        return n?.filter((e) => r?.some((t) => t.teamId === e.id));
      })),
      (Z = n(r, ({ get: e }) => {
        if (A(e(U)).length !== 3) return !0;
        if (e(V) === `personal`) return !1;
        let t = e(D, e(w));
        return t != null && (e(X)?.some((e) => !t.includes(e.id)) ?? !1);
      })),
      (Q = a(r, (e, { get: t }) => {
        let n = t(w),
          r = t(V),
          i = t(D, n),
          a = t(T, n),
          o = typeof a == `object` ? a.teamId : null,
          s = t(I);
        return t(Y, e)?.filter((e) => {
          if (e.teamId == null && F(e.automation)) {
            if (!s) return !1;
          } else if (r === `orbit`) return !1;
          return e.teamId != null && i != null && !i.includes(e.teamId)
            ? !1
            : !(
                (r === `personal` && e.teamId != null) ||
                (r === `team` && (e.teamId == null || (o != null && e.teamId !== o)))
              );
        });
      })));
  }))();
}
export {
  V as a,
  B as c,
  U as d,
  K as f,
  I as h,
  Q as i,
  q as l,
  F as m,
  z as n,
  X as o,
  L as p,
  R as r,
  Z as s,
  $ as t,
  J as u,
};
//# sourceMappingURL=list-state-a1e546effc85.js.map
