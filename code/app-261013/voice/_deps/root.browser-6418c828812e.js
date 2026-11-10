import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vMt as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
import { JEt as r, qEt as i, tjn as a } from "./app-initial-5851df3f6cb1.js";
function o(e) {
  let t = document.createElement(`div`);
  t.className = `size-full`;
  let n = (0, s.createRoot)(t),
    r,
    a = !1,
    o = !1,
    l = !1,
    u = 0,
    d = (e) => {
      ((u = e),
        (r ??= document.createElement(`div`)),
        (r.className = `pointer-events-none invisible fixed start-0 top-0 size-28`),
        r.append(t),
        document.body.append(r),
        n.render(
          (0, c.jsx)(i, {
            glowEnabled: !1,
            paletteIndex: u,
            placement: `center`,
            phase: `inactive`,
            voiceActivity: `idle`,
            onDraw: () => {
              o = !a;
            },
            onRenderError: () => {
              o = !1;
            },
            onStateSample: void 0,
          }),
        ));
    };
  return {
    get ready() {
      return o && !a;
    },
    prerender: d,
    mount(e) {
      (e.append(t), r?.remove(), (r = void 0));
    },
    park(e) {
      !a && t.parentElement === e && d(u);
    },
    render(e) {
      ((u = e.paletteIndex ?? 0),
        n.render(
          (0, c.jsx)(i, {
            ...e,
            onStateSample: void 0,
            onDraw: (t) => {
              if (a) return;
              let n = !l;
              ((l = !0), e.onDraw?.({ ...t, isFirstDraw: n }));
            },
          }),
        ));
    },
    dispose() {
      a || ((a = !0), t.remove(), r?.remove(), queueMicrotask(() => n.unmount()));
    },
  };
}
var s, c;
function l() {
  return (l = e(() => {
    ((s = t()), a(), r(), (c = n()));
  }))();
}
export { l as n, o as t };
//# sourceMappingURL=root.browser-6418c828812e.js.map
