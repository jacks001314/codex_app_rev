import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  oSt as a,
  vzt as o,
  wot as s,
  yzt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  AVt as u,
  D9t as d,
  E9t as f,
  Pen as p,
  dfn as m,
  eDr as h,
  iNr as g,
  jVt as _,
  lfn as v,
  nDr as y,
  oFr as b,
  rNr as x,
  ren as S,
  sCr as C,
  sFr as w,
  uen as T,
  yCr as E,
} from "./app-initial-5851df3f6cb1.js";
import { dh as D, uh as O } from "./app-primary-fe8a450b3b04.js";
import { n as k, t as A } from "./use-codex-worktrees-5b60697f9783.js";
function j(e, t, n) {
  t.hostId === `local` && (t.isCodexWorktree || n) && e.get(I) === `eligible` && e.set(I, `succeeded`);
}
function M({ prompt: e }) {
  return /\b(?:worktrees?|parallel|another task|separate task|isolat(?:e|ed|ion)|keep my changes|without disturbing)\b/i.test(
    e.trim(),
  );
}
function N(e) {
  let r = (0, P.c)(12),
    { enabled: a, entryPoint: o, isLocalModeRemote: s } = e,
    c = s !== void 0 && s,
    u = n(t),
    d = i(_),
    p = i(I),
    m = w(d.hostId),
    h;
  r[0] !== d.cwd || r[1] !== d.hostId
    ? ((h = v({ cwd: d.cwd, hostId: d.hostId })), (r[0] = d.cwd), (r[1] = d.hostId), (r[2] = h))
    : (h = r[2]);
  let g = l(S, h),
    b = i(L),
    x = i(f),
    C = i(D),
    T = y(`2634243883`),
    E = y(`505458`),
    O = a && !x && !C && p === `eligible` && T && b,
    A;
  r[3] === O ? (A = r[4]) : ((A = { enabled: O }), (r[3] = O), (r[4] = A));
  let { data: M } = k(m, `home_page`, A),
    N = M != null && M.worktrees.length > 0,
    R,
    z;
  (r[5] !== N || r[6] !== d || r[7] !== u
    ? ((R = () => {
        j(u, d, N);
      }),
      (z = [N, d, u]),
      (r[5] = N),
      (r[6] = d),
      (r[7] = u),
      (r[8] = R),
      (r[9] = z))
    : ((R = r[8]), (z = r[9])),
    (0, F.useEffect)(R, z));
  let B =
      O &&
      E &&
      d.kind === `git` &&
      g === `local` &&
      M != null &&
      !N &&
      o === `codex` &&
      d.hostId === `local` &&
      !c,
    V;
  return (r[10] === B ? (V = r[11]) : ((V = { isEligible: B }), (r[10] = B), (r[11] = V)), V);
}
var P, F, I, L;
function R() {
  return (R = e(() => {
    ((P = o()),
      r(),
      (F = c()),
      d(),
      A(),
      u(),
      s(),
      E(),
      b(),
      h(),
      x(),
      m(),
      p(),
      O(),
      (I = g(`worktree-onboarding-state-v1`, `eligible`)),
      (L = a(C, ({ get: e }) => M({ prompt: e(T) }))));
  }))();
}
export { N as n, I as r, R as t };
//# sourceMappingURL=worktree-onboarding-state-fdfd237fa3a4.js.map
