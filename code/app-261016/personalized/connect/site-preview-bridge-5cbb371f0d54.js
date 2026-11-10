const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-pending-site-preview-659622b526e5.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  F3 as n,
  FBt as r,
  I3 as i,
  LNt as a,
  OFt as o,
  PBt as s,
  ZSt as c,
  iCt as l,
  kFt as u,
  nCt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as f,
  C2n as p,
  MOr as m,
  SR as h,
  Xvn as g,
  b2n as _,
  eOr as v,
  qjn as y,
  wR as b,
  y7n as x,
  zOr as S,
} from "./app-initial-ad16eaadf81f.js";
import { $c as C, el as w, tl as T } from "./app-primary-3e00728c2a4c.js";
function E() {
  return (E = e(() => {
    (s(), c(), r(), v(), f(), x(), p(), y(), S(), h(), g(), b(), C());
  }))();
}
function D() {
  let e = (0, O.c)(12),
    n = t(m),
    r = l(T),
    i = d(_, r?.hostId == null ? (r?.conversationId ?? null) : null);
  if (
    r?.showComposer !== !0 ||
    (n.value.routeKind !== `home` &&
      n.value.routeKind !== `chatgpt-thread` &&
      n.value.routeKind !== `local-thread`)
  )
    return null;
  let a;
  e[0] !== r || e[1] !== i || e[2] !== n
    ? ((a = r?.url != null && w(r, n.value, i, n.value.clientThreadId)),
      (e[0] = r),
      (e[1] = i),
      (e[2] = n),
      (e[3] = a))
    : (a = e[3]);
  let o = a,
    s;
  e[4] === n ? (s = e[5]) : ((s = null), (e[4] = n), (e[5] = s));
  let c;
  e[6] !== o || e[7] !== r
    ? ((c = o ? (0, k.jsx)(A, { pending: r }) : null), (e[6] = o), (e[7] = r), (e[8] = c))
    : (c = e[8]);
  let u;
  return (
    e[9] !== s || e[10] !== c
      ? ((u = (0, k.jsxs)(k.Fragment, { children: [s, c] })), (e[9] = s), (e[10] = c), (e[11] = u))
      : (u = e[11]),
    u
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = s()),
      c(),
      p(),
      n(),
      S(),
      E(),
      C(),
      (k = a()),
      u(),
      (A = i(
        async () =>
          (
            await o(
              async () => {
                let { OpenPendingSitePreview: e } = await import(
                  `./open-pending-site-preview-659622b526e5.js`
                );
                return { OpenPendingSitePreview: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            )
          ).OpenPendingSitePreview,
      )));
  }))();
}
export { j as n, E as r, D as t };
//# sourceMappingURL=site-preview-bridge-5cbb371f0d54.js.map
