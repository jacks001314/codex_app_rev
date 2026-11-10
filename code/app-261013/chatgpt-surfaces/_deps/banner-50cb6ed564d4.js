const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./banner-content-72d3b34ca7bf.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./chat-choice-view-98d03df437a6.js",
      "./retirement-53cd5dc76893.js",
      "./workspace-plugin-permissions-a5234cd2a14d.js",
      "./permission-explanation-b56de09d0218.js",
      "./notices-44d3417a6fb0.js",
      "./migrated-plugin-ece31f30dd17.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  Ext as r,
  Ixt as i,
  Pxt as a,
  _Mt as o,
  _xt as s,
  fPt as c,
  gMt as l,
  pPt as u,
  vzt as d,
  wot as f,
  wxt as p,
  xMt as m,
  z4 as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import { OPr as _, Vkt as v, Wkt as y, kPr as b } from "./app-initial-5851df3f6cb1.js";
import { fg as x, hg as S, ug as C } from "./app-primary-fe8a450b3b04.js";
import { n as w, t as T } from "./chat-choice-view-98d03df437a6.js";
function E(e) {
  let t = (0, k.c)(3),
    { gizmoId: n } = e,
    r = g(b, `2160578039`),
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = r ? (0, A.jsx)(j, { gizmoId: n }, n) : null), (t[0] = r), (t[1] = n), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function D(e) {
  let t = (0, k.c)(7),
    { entryPoint: n, gizmoId: r } = e,
    i = n === `codex` && `electron:mx-[var(--home-composer-inline-inset)]`,
    a;
  t[0] === i ? (a = t[1]) : ((a = l(`empty:hidden`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] === r ? (o = t[3]) : ((o = (0, A.jsx)(E, { gizmoId: r })), (t[2] = r), (t[3] = o));
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, A.jsx)(`div`, { className: a, children: o })), (t[4] = a), (t[5] = o), (t[6] = s))
      : (s = t[6]),
    s
  );
}
function O(e) {
  let t = (0, k.c)(10),
    { gizmoId: a } = e,
    o = i(n),
    s = p(),
    c = r(),
    { data: l } = g(v, a),
    u;
  t[0] !== a || t[1] !== s.pathname
    ? ((u = { gizmoId: a, visitKey: s.pathname }), (t[0] = a), (t[1] = s.pathname), (t[2] = u))
    : (u = t[2]);
  let d = g(x, u),
    f;
  return (
    t[3] !== d || t[4] !== a || t[5] !== s.pathname || t[6] !== c || t[7] !== l || t[8] !== o
      ? ((f =
          d && l?.gizmo.migrated_plugin_id
            ? (0, A.jsx)(T, {
                gptName: l.gizmo.display.name,
                accessState: `error`,
                onUsePlugin: () => void c(`/plugins`),
                onKeepUsingGpt: () => C(o, { gizmoId: a, visitKey: s.pathname }),
              })
            : null),
        (t[3] = d),
        (t[4] = a),
        (t[5] = s.pathname),
        (t[6] = c),
        (t[7] = l),
        (t[8] = o),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var k, A, j;
function M() {
  return (M = e(() => {
    ((k = d()),
      o(),
      a(),
      s(),
      h(),
      f(),
      _(),
      y(),
      w(),
      S(),
      (A = m()),
      u(),
      (j = t(
        async () =>
          (
            await c(
              async () => {
                let { GptPluginMigrationBannerContent: e } = await import(`./banner-content-72d3b34ca7bf.js`);
                return { GptPluginMigrationBannerContent: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
              import.meta.url,
            )
          ).GptPluginMigrationBannerContent,
        { errorFallback: (e) => (0, A.jsx)(O, { ...e }) },
      )));
  }))();
}
export { D as n, M as r, E as t };
//# sourceMappingURL=banner-50cb6ed564d4.js.map
