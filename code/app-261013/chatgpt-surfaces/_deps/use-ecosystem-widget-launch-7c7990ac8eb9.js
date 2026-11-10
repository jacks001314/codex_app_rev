import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, yzt as n } from "./app-shared-bbfeca5e5737.js";
import { IWn as r, LWn as i } from "./app-initial-5851df3f6cb1.js";
function a(e) {
  let t = (0, o.c)(9),
    { launch: n, onError: r } = e,
    a = (0, s.useRef)(null),
    c,
    l;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => () => {
        a.current?.controller.abort();
      }),
      (l = []),
      (t[0] = c),
      (t[1] = l))
    : ((c = t[0]), (l = t[1])),
    (0, s.useEffect)(c, l));
  let [u, d] = (0, s.useState)(null),
    f;
  t[2] !== n || t[3] !== r
    ? ((f = async (e) => {
        if (a.current?.pending) return;
        a.current?.controller.abort();
        let t = { controller: new AbortController(), pending: !0 };
        a.current = t;
        let { signal: o } = t.controller,
          s;
        d({ kind: `loading` });
        try {
          let r = await n(e, o, (e) => {
            ((s = e), o.aborted || d({ kind: `loading`, tracking: s }));
          });
          ((t.pending = !1), o.aborted || d({ kind: `ready`, result: r }));
        } catch (e) {
          let n = e;
          ((t.pending = !1),
            o.aborted || (i(n) || r?.(n), o.aborted || d({ kind: `error`, error: n, tracking: s })));
        }
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        (a.current?.controller.abort(), (a.current = null), d(null));
      }),
      (t[5] = m))
    : (m = t[5]);
  let h;
  return (
    t[6] !== u || t[7] !== p
      ? ((h = { close: m, dialog: u, launch: p }), (t[6] = u), (t[7] = p), (t[8] = h))
      : (h = t[8]),
    h
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = t()), (s = n()), r());
  }))();
}
export { a as n, c as t };
//# sourceMappingURL=use-ecosystem-widget-launch-7c7990ac8eb9.js.map
