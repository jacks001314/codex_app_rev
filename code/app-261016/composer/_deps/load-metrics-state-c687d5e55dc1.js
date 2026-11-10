import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { TCt as t, ZSt as n } from "./app-shared-2feb3d4c6fcc.js";
import { MOr as r, Xgn as i, Zgn as a, d_n as o, u_n as s, zOr as c } from "./app-initial-ad16eaadf81f.js";
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
    (n(),
      c(),
      i(),
      o(),
      (u = t(
        r,
        (e, { signal: t }) => {
          let n = t(null),
            r = null,
            i,
            o = 0,
            c = (e, t, o, c = `page`) => {
              e !== r &&
                (i?.finishPending(`cancelled`, `navigation_away`),
                (r = e),
                (i =
                  r != null && t
                    ? new s(
                        `panel`,
                        void 0,
                        void 0,
                        void 0,
                        c === `space` ? `open_space` : `open_page`,
                        o == null ? void 0 : a.takePanelAction(c, o),
                        c === `page` ? o : void 0,
                      )
                    : void 0),
                n.set(i?.id ?? null));
            };
          return {
            activation$: n,
            activate: c,
            getLoad: (e) => (i?.id === e ? i : void 0),
            observe: () => (
              o++,
              () => {
                (o--,
                  queueMicrotask(() => {
                    o === 0 && c(null, !1);
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
//# sourceMappingURL=load-metrics-state-c687d5e55dc1.js.map
