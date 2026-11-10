import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  Dqt as n,
  FBt as r,
  IBt as i,
  O3t as a,
  Rqt as o,
  a3t as s,
  c6t as c,
  e4t as l,
  hYt as u,
  hz as d,
  m6t as f,
  mYt as p,
  mz as m,
  n4t as h,
  o3t as g,
  xqt as _,
  znn as v,
} from "./app-initial-f094ef01c64d.js";
import { a as y, r as b } from "./computer-history-query-5e050ffaae9e.js";
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
var w = e(() => {}),
  T,
  E,
  D,
  O,
  k = e(() => {
    (a(),
      t(),
      y(),
      w(),
      r(),
      n(),
      d(),
      g(),
      h(),
      p(),
      (T = c(s, ({ get: e }) => {
        if (m?.chronicle == null || e(i) !== `macOS` || !e(u, `3488289778`)) return !1;
        let t = e(o, l);
        if (!t.isSuccess || v(t.data?.config, `chronicle`) !== !0) return !1;
        let n = e(_, { hostId: l });
        return !(n.isPending || n.data?.requirements?.featureRequirements?.chronicle === !1);
      })),
      (E = c(s, ({ get: e }) => {
        if (!e(T)) return null;
        let t = e(b);
        return !t.isSuccess || t.data == null ? null : t.data;
      })),
      (D = f(s, () => ({ knownSuggestions: null, unreadSkillsSuggestions: [] }), {
        onMount: (e, t) =>
          t.watch(({ get: t }) => {
            let n = t(E);
            e((e) => x(e, n));
          }),
      })),
      (O = f(s, null, {
        onMount: (e, t) =>
          t.watch(({ get: e }) => {
            e(D).unreadSkillsSuggestions.length > 0 &&
              t.set(D, (e) => ({ ...e, unreadSkillsSuggestions: [] }));
          }),
      })));
  });
export { k as a, T as i, D as n, E as r, O as t };
//# sourceMappingURL=computer-history-suggestions-7b96a293b088.js.map
