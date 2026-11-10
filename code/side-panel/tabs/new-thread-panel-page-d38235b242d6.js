import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  F3t as t,
  IXt as n,
  LX as r,
  Ls as i,
  O3t as a,
  Opn as o,
  RX as s,
  Rpn as c,
  Rs as l,
  Spn as u,
  hmn as d,
  kmn as f,
  nqt as p,
  rqt as m,
  zXt as h,
  zpn as g,
} from "./app-initial-f094ef01c64d.js";
import {
  L as _,
  Qo as v,
  R as y,
  fs as b,
  i as x,
  ps as S,
  r as C,
  ts as w,
} from "./app-primary-4c40d73a1074.js";
import { r as T, t as E } from "./codex-home-announcements-d9e95d6eff58.js";
function D() {
  let e = (0, k.c)(14),
    n = o(),
    r = t(s);
  {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, A.jsx)(h, { to: `/`, replace: !0 })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let a;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = p.isRecording() ? (0, A.jsx)(i, { onPaint: O }) : null), (e[1] = a))
    : (a = e[1]);
  let l;
  e[2] === n
    ? (l = e[3])
    : ((l = n.formatMessage({
        id: `homePage.mainContent`,
        defaultMessage: `Main content`,
        description: `Main landmark label for the home page`,
      })),
      (e[2] = n),
      (e[3] = l));
  let u;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, A.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-3xl flex-col gap-3 px-panel`,
        children: (0, A.jsx)(`div`, { className: `flex-1` }),
      })),
      (e[4] = u))
    : (u = e[4]);
  let d;
  e[5] === l
    ? (d = e[6])
    : ((d = (0, A.jsx)(`div`, {
        className: `[container-type:size] relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden [container-name:home-main-content]`,
        role: `main`,
        "aria-label": l,
        children: u,
      })),
      (e[5] = l),
      (e[6] = d));
  let f;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = c(v, `z-10 -mt-[var(--thread-footer-overlap)] flex flex-col gap-2 pb-2`)), (e[7] = f))
    : (f = e[7]);
  let m;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, A.jsx)(`div`, {
        className: `home-banners mt-2 flex flex-col gap-2 empty:hidden`,
        children: (0, A.jsx)(E, {}),
      })),
      (e[8] = m))
    : (m = e[8]);
  let g;
  e[9] === r
    ? (g = e[10])
    : ((g = (0, A.jsxs)(`div`, {
        className: f,
        children: [
          m,
          (0, A.jsx)(b, {
            children: (0, A.jsx)(_, { className: `electron:hidden`, selectedProject: r }),
          }),
        ],
      })),
      (e[9] = r),
      (e[10] = g));
  let y;
  return (
    e[11] !== d || e[12] !== g
      ? ((y = (0, A.jsxs)(C, {
          children: [
            a,
            (0, A.jsx)(`div`, {
              className: `flex h-full flex-col`,
              "data-vscode-context": `{"chatgpt.supportsNewChatMenu": true}`,
              children: (0, A.jsxs)(`div`, {
                className: `relative flex h-full flex-col`,
                children: [d, g],
              }),
            }),
          ],
        })),
        (e[11] = d),
        (e[12] = g),
        (e[13] = y))
      : (y = e[13]),
    y
  );
}
function O() {
  return p.markHomeVisible();
}
var k, A;
e(() => {
  ((k = f()), g(), a(), u(), n(), T(), y(), S(), m(), l(), r(), x(), w(), (A = d()));
})();
export { D as NewThreadPanelPage };
//# sourceMappingURL=new-thread-panel-page-d38235b242d6.js.map
