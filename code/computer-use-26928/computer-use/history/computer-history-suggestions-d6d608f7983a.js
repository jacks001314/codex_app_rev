import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Gwt as t,
  Hk as n,
  O5t as r,
  RJt as i,
  Rwt as a,
  U0 as o,
  Vk as s,
  W0 as c,
  YKt as l,
  dJt as u,
  e7t as d,
  f3t as f,
  fJt as p,
  o7t as m,
  qKt as h,
  rTt as g,
  vMt as _,
  yMt as v,
} from "./app-shared-7552fc8d5d82.js";
import { a as y, r as b } from "./computer-history-query-7b8f19bb30d6.js";
function x(e, t) {
  if (t == null) return e;
  if (e.knownSuggestions == null) return { knownSuggestions: t, unreadSkillsSuggestions: [] };
  let n = [...e.knownSuggestions],
    r = [];
  for (let e of t) {
    let t = n.findIndex((t) => C(t, e));
    t === -1 ? (n.push(e), e.type === `skill` && r.push(e)) : (n[t] = e);
  }
  return {
    knownSuggestions: n,
    unreadSkillsSuggestions: [...S(e.unreadSkillsSuggestions, t), ...r],
  };
}
function S(e, t) {
  return e.flatMap((e) => {
    let n = t.find((t) => C(e, t));
    return n == null ? [] : [n];
  });
}
function C(e, t) {
  return (
    e.type === t.type &&
    e.name.trim().toLowerCase() === t.name.trim().toLowerCase() &&
    e.interval.startMs < t.interval.endMs &&
    t.interval.startMs < e.interval.endMs
  );
}
var w, T, E, D;
function O() {
  return (O = e(() => {
    (r(),
      i(),
      y(),
      o(),
      t(),
      n(),
      p(),
      l(),
      _(),
      (w = d(u, ({ get: e }) => {
        if (s?.chronicle == null || e(c) !== `macOS` || !e(v, `3488289778`)) return !1;
        let t = e(g, h);
        if (!t.isSuccess || f(t.data?.config, `chronicle`) !== !0) return !1;
        let n = e(a, { hostId: h });
        return !(n.isPending || n.data?.requirements?.featureRequirements?.chronicle === !1);
      })),
      (T = d(u, ({ get: e }) => {
        if (!e(w)) return null;
        let t = e(b);
        return !t.isSuccess || t.data == null ? null : t.data;
      })),
      (E = m(u, () => ({ knownSuggestions: null, unreadSkillsSuggestions: [] }), {
        onMount: (e, t) =>
          t.watch(({ get: t }) => {
            let n = t(T);
            e((e) => x(e, n));
          }),
      })),
      (D = m(u, null, {
        onMount: (e, t) =>
          t.watch(({ get: e }) => {
            e(E).unreadSkillsSuggestions.length > 0 &&
              t.set(E, (e) => ({ ...e, unreadSkillsSuggestions: [] }));
          }),
      })));
  }))();
}
export { O as a, w as i, E as n, T as r, D as t };
//# sourceMappingURL=computer-history-suggestions-d6d608f7983a.js.map
