const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./banner-content-ad50091f0d75.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./chat-choice-view-ff40e9769623.js",
      "./retirement-f17fd3e88db9.js",
      "./workspace-plugin-permissions-4ff2558a0323.js",
      "./permission-explanation-eb8b87e3721b.js",
      "./notices-e87d5e3af0c6.js",
      "./migrated-plugin-bd1222c52d99.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  I3 as i,
  LNt as a,
  MNt as o,
  NNt as s,
  NSt as c,
  OFt as l,
  PBt as u,
  Qst as d,
  USt as f,
  VSt as p,
  ZSt as m,
  kFt as h,
  nCt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import { DEt as _, lBr as v, uBr as y, wEt as b } from "./app-initial-ad16eaadf81f.js";
import { Ag as x, Dg as S, Tg as C } from "./app-primary-3e00728c2a4c.js";
import { n as w, t as T } from "./chat-choice-view-ff40e9769623.js";
function E(e) {
  let t = (0, k.c)(3),
    { gizmoId: n } = e,
    r = g(y, `2160578039`),
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
  t[0] === i ? (a = t[1]) : ((a = o(`empty:hidden`, i)), (t[0] = i), (t[1] = a));
  let s;
  t[2] === r ? (s = t[3]) : ((s = (0, A.jsx)(E, { gizmoId: r })), (t[2] = r), (t[3] = s));
  let c;
  return (
    t[4] !== a || t[5] !== s
      ? ((c = (0, A.jsx)(`div`, { className: a, children: s })), (t[4] = a), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
function O(e) {
  let n = (0, k.c)(10),
    { gizmoId: r } = e,
    i = t(d),
    a = p(),
    o = f(),
    { data: s } = g(b, r),
    c;
  n[0] !== r || n[1] !== a.pathname
    ? ((c = { gizmoId: r, visitKey: a.pathname }), (n[0] = r), (n[1] = a.pathname), (n[2] = c))
    : (c = n[2]);
  let l = g(S, c),
    u;
  return (
    n[3] !== l || n[4] !== r || n[5] !== a.pathname || n[6] !== o || n[7] !== s || n[8] !== i
      ? ((u =
          l && s?.gizmo.migrated_plugin_id
            ? (0, A.jsx)(T, {
                gptName: s.gizmo.display.name,
                accessState: `error`,
                onUsePlugin: () => void o(`/plugins`),
                onKeepUsingGpt: () => C(i, { gizmoId: r, visitKey: a.pathname }),
              })
            : null),
        (n[3] = l),
        (n[4] = r),
        (n[5] = a.pathname),
        (n[6] = o),
        (n[7] = s),
        (n[8] = i),
        (n[9] = u))
      : (u = n[9]),
    u
  );
}
var k, A, j;
function M() {
  return (M = e(() => {
    ((k = u()),
      s(),
      m(),
      c(),
      r(),
      n(),
      v(),
      _(),
      w(),
      x(),
      (A = a()),
      h(),
      (j = i(
        async () =>
          (
            await l(
              async () => {
                let { GptPluginMigrationBannerContent: e } = await import(`./banner-content-ad50091f0d75.js`);
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
//# sourceMappingURL=banner-64014c85f1a6.js.map
