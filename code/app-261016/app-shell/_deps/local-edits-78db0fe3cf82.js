import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as n, Qst as r, TCt as i, ZSt as a } from "./app-shared-2feb3d4c6fcc.js";
import { B$r as o, bLr as s, wLr as c, zRr as l } from "./app-initial-ad16eaadf81f.js";
function u(e) {
  let t = new Set(),
    n = !1;
  for (let r of e.values()) r.skillId == null ? (n = !0) : t.add(r.skillId);
  return { files: n, skillIds: t };
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = t(o(), 1)),
      a(),
      c(),
      n(),
      (f = i(r, ({ accountId: e, userId: t }, { scope: n, signal: r }) => {
        let i = r(new Map()),
          a = new Map(),
          o = Promise.resolve(void 0);
        function c() {
          return t != null && n.get(l) === e && n.get(s) === t;
        }
        function u(e, t) {
          let r = new Map(n.get(i));
          (t == null ? r.delete(e) : r.set(e, t), n.set(i, r));
        }
        function f(r) {
          let c = a.get(r),
            d = n.get(i).get(r);
          if (c == null || d == null) return Promise.resolve(!0);
          let { version: f } = c;
          if (d.status === `saving` && c.inFlight != null) return c.inFlight;
          u(r, { ...d, status: `saving` });
          let p = o.then(async () => {
            let o = new AbortController(),
              m = n.watch((n) => {
                (t == null || n.get(l) !== e || n.get(s) !== t) && o.abort();
              });
            try {
              (o.signal.throwIfAborted(), await c.perform(d.content, o.signal), o.signal.throwIfAborted());
              let e = n.get(i).get(r);
              return (c.version === f ? u(r, void 0) : e != null && u(r, { ...e, baseline: d.content }), !0);
            } catch {
              return (c.version === f && u(r, { ...d, status: `failed` }), !1);
            } finally {
              (m(),
                c.inFlight === p && (c.inFlight = void 0),
                c.version === f && !n.get(i).has(r) && a.get(r) === c && a.delete(r));
            }
          });
          return ((c.inFlight = p), (o = p), p);
        }
        function p(e, t, r, o, s) {
          if (!c()) return;
          let l = a.get(e);
          (l ?? ((l = { perform: s, deferred: (0, d.default)(() => f(e), 500), version: 0 }), a.set(e, l)),
            (l.perform = s));
          let p = n.get(i).get(e);
          if (p?.content === t) return;
          l.version += 1;
          let m = p?.baseline ?? r;
          if (t === m && l.inFlight == null) {
            (l.deferred.cancel(), u(e, void 0), a.delete(e));
            return;
          }
          (u(e, { content: t, baseline: m, skillId: o, status: `pending` }), l.deferred());
        }
        async function m(e) {
          let t = a.get(e);
          if (t == null) return !0;
          (t.deferred.cancel(), await f(e));
          let r = n.get(i).get(e);
          return r?.status === `pending` || r?.status === `saving` ? m(e) : r == null;
        }
        function h(e) {
          let t = n.get(i).get(e),
            r = a.get(e);
          t != null && r != null && p(e, t.baseline, t.baseline, t.skillId, r.perform);
        }
        return {
          drafts$: i,
          request: p,
          flush: m,
          async flushAll() {
            for (; n.get(i).size > 0;)
              if ((await Promise.all([...n.get(i).keys()].map(m))).some((e) => !e)) return !1;
            return !0;
          },
          discard: h,
          async discardAll() {
            for (let e of n.get(i).keys()) h(e);
            return (await Promise.all([...n.get(i).keys()].map(m))).every((e) => e);
          },
        };
      })));
  }))();
}
export { p as n, f as r, u as t };
//# sourceMappingURL=local-edits-78db0fe3cf82.js.map
