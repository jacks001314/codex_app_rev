import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Kat as n,
  Pxt as r,
  avt as i,
  fSt as a,
  iot as o,
  oSt as s,
  oot as c,
  qat as l,
  rst as u,
  wot as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ggr as f,
  OPr as p,
  Vgr as m,
  iur as h,
  kPr as g,
  rur as _,
  t_r as v,
} from "./app-initial-5851df3f6cb1.js";
import { a as y, r as b } from "./computer-history-query-30a12dff18c6.js";
function x(e, t) {
  if (t == null) return e;
  if (e.knownSuggestions == null) return { knownSuggestions: t, unreadSkillsSuggestions: [] };
  let n = [...e.knownSuggestions],
    r = [];
  for (let e of t) {
    let t = n.findIndex((t) => C(t, e));
    t === -1 ? (n.push(e), e.type === `skill` && r.push(e)) : (n[t] = e);
  }
  return { knownSuggestions: n, unreadSkillsSuggestions: [...S(e.unreadSkillsSuggestions, t), ...r] };
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
      u(),
      y(),
      _(),
      f(),
      l(),
      d(),
      c(),
      p(),
      (w = s(t, ({ get: e }) => {
        if (n?.chronicle == null || e(h) !== `macOS` || !e(g, `3488289778`)) return !1;
        let t = e(v, o);
        if (!t.isSuccess || i(t.data?.config, `chronicle`) !== !0) return !1;
        let r = e(m, { hostId: o });
        return !(r.isPending || r.data?.requirements?.featureRequirements?.chronicle === !1);
      })),
      (T = s(t, ({ get: e }) => {
        if (!e(w)) return null;
        let t = e(b);
        return !t.isSuccess || t.data == null ? null : t.data;
      })),
      (E = a(t, () => ({ knownSuggestions: null, unreadSkillsSuggestions: [] }), {
        onMount: (e, t) =>
          t.watch(({ get: t }) => {
            let n = t(T);
            e((e) => x(e, n));
          }),
      })),
      (D = a(t, null, {
        onMount: (e, t) =>
          t.watch(({ get: e }) => {
            e(E).unreadSkillsSuggestions.length > 0 &&
              t.set(E, (e) => ({ ...e, unreadSkillsSuggestions: [] }));
          }),
      })));
  }))();
}
export { O as a, w as i, E as n, T as r, D as t };
//# sourceMappingURL=computer-history-suggestions-1ba6cfc98a5b.js.map
