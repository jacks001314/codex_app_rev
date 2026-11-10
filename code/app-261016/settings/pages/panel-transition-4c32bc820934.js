import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FNt as t, Jz as n, RFt as r, qz as i, zFt as a } from "./app-shared-2feb3d4c6fcc.js";
import { Air as o, Fzt as s, Mir as c, Mzt as l } from "./app-initial-ad16eaadf81f.js";
var u, d, f, p;
function m() {
  return (m = e(() => {
    ((u = `_transition_dwu4g_1`),
      (d = `_forward_dwu4g_25`),
      (f = `_back_dwu4g_33`),
      (p = {
        transition: u,
        forward: d,
        "exit-left": `_exit-left_dwu4g_75`,
        "enter-left": `_enter-left_dwu4g_75`,
        back: f,
        "exit-right": `_exit-right_dwu4g_75`,
        "enter-right": `_enter-right_dwu4g_75`,
      }));
  }))();
}
function h(e, t, r) {
  (_?.transition.skipTransition(), _?.cleanup(), (_ = null));
  let i = e.get(s),
    c = e.get(o).pathname,
    l = document.querySelector(
      `[role="complementary"] [data-shopping-panel-content="${t === `forward` ? `browse` : `product`}"]`,
    );
  if (
    l == null ||
    i == null ||
    i.isFullWidth === !0 ||
    e.get(n) ||
    typeof document.startViewTransition != `function`
  ) {
    r();
    return;
  }
  let u = [],
    d,
    f = (e) => {
      let t = e.style.viewTransitionName;
      ((e.style.viewTransitionName = `shopping-panel`),
        u.push(() => {
          e.style.viewTransitionName = t;
        }));
    },
    m = () => {
      u.splice(0).forEach((e) => e());
    },
    h = () => {
      (d?.(), m(), document.documentElement.classList.remove(p.transition, p[t]));
    },
    v = !1,
    y = !1,
    b = () =>
      v || y || !l.isConnected || e.get(s)?.id !== i.id || e.get(o).pathname !== c
        ? !1
        : ((v = !0), (0, g.flushSync)(r), !0);
  (f(l), document.documentElement.classList.add(p.transition, p[t]));
  try {
    let n = !1,
      r = null,
      i,
      l = document.startViewTransition(() => {
        if (!y) {
          if ((m(), !b())) {
            n = !0;
            return;
          }
          ((r = document.querySelector(
            `[role="complementary"] [data-shopping-panel-content="${t === `forward` ? `product` : `browse`}"]`,
          )),
            r == null ? (n = !0) : f(r),
            (i = e.get(s)?.id));
        }
      }),
      u = {
        transition: l,
        cleanup: () => {
          ((y = !0), h());
        },
      };
    ((_ = u),
      l.ready.then(
        () => {
          if (_ === u) {
            if (n || !r?.isConnected) {
              l.skipTransition();
              return;
            }
            d = e.watch(({ get: e }) => {
              let t = e(s);
              (t?.id !== i || t?.isFullWidth || e(o).pathname !== c) && l.skipTransition();
            });
          }
        },
        () => {},
      ),
      l.updateCallbackDone.catch((e) => {
        a.error(`Failed to navigate shopping panel`, { safe: {}, sensitive: { error: e } });
      }));
    let p = () => {
      _ === u && (h(), (_ = null));
    };
    l.finished.then(p, p);
  } catch (e) {
    if ((h(), v)) throw e;
    b();
  }
}
var g, _;
function v() {
  return (v = e(() => {
    ((g = t()), c(), i(), l(), r(), m(), (_ = null));
  }))();
}
export { h as n, v as t };
//# sourceMappingURL=panel-transition-4c32bc820934.js.map
