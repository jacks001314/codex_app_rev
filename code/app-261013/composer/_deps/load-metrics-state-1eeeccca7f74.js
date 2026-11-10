import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, cSt as n } from "./app-shared-bbfeca5e5737.js";
import { Cwr as r, Gmn as i, Kmn as a, Mmn as o, gwr as s, jmn as c } from "./app-initial-5851df3f6cb1.js";
function l(e, t, n) {
  if (t != null)
    return e.watch(({ get: e }) => {
      let r = e(u, t),
        i = r.getLoad(e(r.activation$));
      i != null && n(i);
    });
}
var u;
function d() {
  return (d = e(() => {
    (t(),
      r(),
      c(),
      a(),
      (u = n(
        s,
        (e, { signal: t }) => {
          let n = t(null),
            r = null,
            a,
            s = 0,
            c = (e, t, s, c = `page`) => {
              e !== r &&
                (a?.finishPending(`cancelled`, `navigation_away`),
                (r = e),
                (a =
                  r != null && t
                    ? new i(
                        `panel`,
                        void 0,
                        void 0,
                        void 0,
                        c === `space` ? `open_space` : `open_page`,
                        s == null ? void 0 : o.takePanelAction(c, s),
                        c === `page` ? s : void 0,
                      )
                    : void 0),
                n.set(a?.id ?? null));
            };
          return {
            activation$: n,
            activate: c,
            getLoad: (e) => (a?.id === e ? a : void 0),
            observe: () => (
              s++,
              () => {
                (s--,
                  queueMicrotask(() => {
                    s === 0 && c(null, !1);
                  }));
              }
            ),
          };
        },
        { autoDispose: !0 },
      )));
  }))();
}
export { l as n, u as r, d as t };
//# sourceMappingURL=load-metrics-state-1eeeccca7f74.js.map
