import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, _Mt as n, gMt as r, jDt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { Lh as s, Rh as c } from "./app-primary-fe8a450b3b04.js";
function l(e) {
  let n = (0, u.c)(3),
    { stage: r } = e;
  switch (r) {
    case `creating`: {
      let e;
      return (
        n[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, d.jsx)(t, {
              id: `restricted.environmentSetup.onboarding.creatingTask`,
              defaultMessage: `Creating setup chat`,
              description: `Loading status while creating the configuration and setup chat for a new cloud environment`,
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    case `connecting`: {
      let e;
      return (
        n[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, d.jsx)(t, {
              id: `restricted.environmentSetup.onboarding.connectingTask`,
              defaultMessage: `Connecting to setup chat`,
              description: `Loading status while connecting to the newly created cloud environment setup chat`,
            })),
            (n[1] = e))
          : (e = n[1]),
        e
      );
    }
    case `starting`: {
      let e;
      return (
        n[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, d.jsx)(t, {
              id: `restricted.environmentSetup.onboarding.startingThread`,
              defaultMessage: `Preparing your environment`,
              description: `Loading status while preparing and starting the first assistant turn for a new cloud environment, before assistant output arrives`,
            })),
            (n[2] = e))
          : (e = n[2]),
        e
      );
    }
  }
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = a()), i(), (d = o()));
  }))();
}
function p(e) {
  let n = (0, m.c)(11),
    { children: i, isVisible: a } = e,
    o = a === void 0 || a,
    c = !o && `invisible`,
    l;
  n[0] === c ? (l = n[1]) : ((l = r(`flex flex-col gap-1 select-none`, c)), (n[0] = c), (n[1] = l));
  let u = !o,
    d;
  n[2] === i ? (d = n[3]) : ((d = (0, h.jsx)(s, { status: `running`, children: i })), (n[2] = i), (n[3] = d));
  let f;
  n[4] === o
    ? (f = n[5])
    : ((f =
        o &&
        (0, h.jsx)(`p`, {
          className: `ps-7 text-sm text-secondary`,
          children: (0, h.jsx)(t, {
            id: `restricted.environmentSetup.onboarding.preparationDescription`,
            defaultMessage: `Setup includes downloading your repository. Large repositories can take longer.`,
            description: `Explains why preparing a cloud environment can take time before the setup assistant responds`,
          }),
        })),
      (n[4] = o),
      (n[5] = f));
  let p;
  return (
    n[6] !== l || n[7] !== u || n[8] !== d || n[9] !== f
      ? ((p = (0, h.jsxs)(`div`, { className: l, "aria-hidden": u, children: [d, f] })),
        (n[6] = l),
        (n[7] = u),
        (n[8] = d),
        (n[9] = f),
        (n[10] = p))
      : (p = n[10]),
    p
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = a()), n(), i(), c(), (h = o()));
  }))();
}
export { f as i, g as n, l as r, p as t };
//# sourceMappingURL=preparation-status-c6b61feb3329.js.map
