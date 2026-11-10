import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, nSt as r, oSt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import {
  Akr as o,
  Dbn as s,
  FEr as c,
  FFr as l,
  GMr as ee,
  Hmr as u,
  JOr as d,
  Jpr as f,
  NPr as p,
  OPr as m,
  Obn as te,
  PEr as ne,
  QMr as re,
  Upr as ie,
  Vmr as h,
  YOr as g,
  ZMr as _,
  aAr as v,
  bat as y,
  ckr as b,
  lAr as x,
  mkr as S,
  pkr as ae,
  qkr as oe,
  rkr as se,
  tNr as ce,
  xkr as le,
  yat as C,
  zFr as ue,
  zkr as w,
} from "./app-initial-5851df3f6cb1.js";
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
} from "./state-caaaa75ceb81.js";
import { n as N, t as P } from "./team-state-594fb79319b3.js";
function F(e) {
  return e.aeon_id != null;
}
var I;
function L() {
  return (L = e(() => {
    (n(), y(), u(), ie(), a(), m(), (I = i(t, ({ get: e }) => !e(p) && e(C).isCapable && (e(f) || e(h)))));
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
  if (!e.get(C).isCapable) return;
  let n = e.get(d);
  await Promise.all(
    R(t).map(async (t) => {
      try {
        for (await e.query.getOrFetch(b, t); e.get(d) === n;) {
          let n = e.get(b, t);
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
    (n(),
      c(),
      ce(),
      s(),
      x(),
      se(),
      y(),
      ue(),
      a(),
      de(),
      L(),
      O(),
      P(),
      ae(),
      le(),
      (B = i(t, ({ get: e }) => {
        if (e(C).isLoading || e(re).accountLoading || e(_).status === `loading`) return null;
        let t = e(d);
        if (t == null || !e(C).isCapable || !e(o, t)) return !1;
        let n = e(w, t).data;
        return n == null ? null : n.length > 0;
      })),
      (V = i(t, ({ get: e }) => {
        let t = e(d),
          n = e(T, t);
        if (n === `orbit`) return e(I) ? n : `all`;
        if ((n === `team` || typeof n == `object`) && e(o, t)) {
          let r = typeof n == `object` ? n.teamId : null,
            i = e(w, t).data;
          return i?.length === 0
            ? `all`
            : r == null || i == null || i.some((e) => e.id === r)
              ? `team`
              : `all`;
        }
        return n === `personal` ? n : `all`;
      })),
      (H = i(t, ({ get: e }) => {
        let t = e(ne, { name: `automations.local` }).isCapable ? e(te).data : void 0,
          n = e(C).isCapable ? e(b, `scheduled`).data : void 0;
        return (
          (t?.items.some((e) => e.status === `ACTIVE`) ?? !1) ||
          (n?.pages.some((e) => e.items.some((e) => e.team_id == null && !F(e) && v(e) === `active`)) ?? !1)
        );
      })),
      (U = i(t, ({ get: e }) => e(fe, e(ee)) ?? `all`)),
      (W = i(t, ({ get: e }) => {
        let t = E(e(l)),
          n = e(d);
        if (
          t?.source !== `cloud` ||
          n == null ||
          (t.accountId != null && t.accountId !== n) ||
          !e(C).isCapable
        )
          return;
        let r = e(g, t.automationId).data;
        return r != null && v(r.automation) === `paused` ? r : void 0;
      })),
      (G = r(t, (e, { get: t }) => {
        let n = t(S, e.accountId).data;
        return (
          n?.accountId === e.accountId &&
          n.items.some((t) => t.teamId === e.teamId && v(t.automation) === `active`)
        );
      })),
      (K = r(t, (e, { get: t }) =>
        e.personalGroup == null
          ? e.assistant
            ? t(j, e.accountId)
            : e.teamId == null
              ? (t(k, e.accountId) ?? (t(B) === !0 && !t(H)))
              : (t(N, e.accountId)[e.teamId] ?? !t(G, { accountId: e.accountId, teamId: e.teamId }))
          : t(M, { accountId: e.accountId, group: e.personalGroup }),
      )),
      (q = r(t, (e, { get: t }) => {
        let n = t(C).isCapable ? R(e).map((e) => t(b, e)) : [];
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
      (J = r(t, (e, { get: t }) => {
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
      (Y = r(t, (e, { get: t }) => {
        let n = t(d);
        if (n == null || !t(C).isCapable) return;
        let { items: r } = t(q, e),
          i = t(S, n).data,
          a = t(W);
        if (r == null && i == null && a == null) return;
        let s = t(o, n),
          c = s && i?.accountId === n ? i.items : [],
          l = new Map(c.map(({ automation: e, teamId: t }) => [e.id, t]));
        return oe(
          [...(r ?? []), ...(a == null ? [] : [a.automation])],
          c.map(({ automation: e }) => e),
        )
          .map((e) => ({ ...e, teamId: l.get(e.automation.id) ?? e.automation.team_id ?? void 0 }))
          .filter((t) => {
            if (t.teamId != null && !s) return !1;
            let n = v(t.automation),
              r = A(e);
            return r.includes(n) || (r.length > 0 && n === `paused` && t.automation.id === a?.automation.id);
          });
      })),
      (X = i(t, ({ get: e }) => {
        let t = e(d);
        if (!e(o, t)) return;
        let n = e(w, t).data,
          r = e(Y, e(U));
        return n?.filter((e) => r?.some((t) => t.teamId === e.id));
      })),
      (Z = i(t, ({ get: e }) => {
        if (A(e(U)).length !== 3) return !0;
        if (e(V) === `personal`) return !1;
        let t = e(D, e(d));
        return t != null && (e(X)?.some((e) => !t.includes(e.id)) ?? !1);
      })),
      (Q = r(t, (e, { get: t }) => {
        let n = t(d),
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
//# sourceMappingURL=list-state-6877e4249028.js.map
