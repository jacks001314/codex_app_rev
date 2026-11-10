import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  FBt as i,
  PBt as a,
  Qst as o,
  ZSt as s,
  iCt as c,
  nCt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as u,
  Aln as d,
  CDr as f,
  Cjr as p,
  FDr as m,
  Jnn as h,
  KBr as g,
  M5t as _,
  Oln as v,
  j5t as y,
  jrn as b,
  kLr as x,
  qBr as S,
  qnn as C,
  tin as w,
  wrn as T,
  xjr as E,
} from "./app-initial-ad16eaadf81f.js";
import { Ch as D, wh as O } from "./app-primary-3e00728c2a4c.js";
import { n as k, t as A } from "./use-codex-worktrees-d20378991919.js";
function j(e, t, n) {
  t.hostId === `local` && (t.isCodexWorktree || n) && e.get(I) === `eligible` && e.set(I, `succeeded`);
}
function M({ prompt: e }) {
  return /\b(?:worktrees?|parallel|another task|separate task|isolat(?:e|ed|ion)|keep my changes|without disturbing)\b/i.test(
    e.trim(),
  );
}
function N(e) {
  let n = (0, P.c)(12),
    { enabled: r, entryPoint: i, isLocalModeRemote: a } = e,
    s = a !== void 0 && a,
    u = t(o),
    d = c(_),
    f = c(I),
    m = S(d.hostId),
    h;
  n[0] !== d.cwd || n[1] !== d.hostId
    ? ((h = v({ cwd: d.cwd, hostId: d.hostId })), (n[0] = d.cwd), (n[1] = d.hostId), (n[2] = h))
    : (h = n[2]);
  let g = l(T, h),
    y = c(L),
    b = c(C),
    x = c(O),
    w = p(`2634243883`),
    E = p(`505458`),
    D = r && !b && !x && f === `eligible` && w && y,
    A;
  n[3] === D ? (A = n[4]) : ((A = { enabled: D }), (n[3] = D), (n[4] = A));
  let { data: M } = k(m, `home_page`, A),
    N = M != null && M.worktrees.length > 0,
    R,
    z;
  (n[5] !== N || n[6] !== d || n[7] !== u
    ? ((R = () => {
        j(u, d, N);
      }),
      (z = [N, d, u]),
      (n[5] = N),
      (n[6] = d),
      (n[7] = u),
      (n[8] = R),
      (n[9] = z))
    : ((R = n[8]), (z = n[9])),
    (0, F.useEffect)(R, z));
  let B =
      D &&
      E &&
      d.kind === `git` &&
      g === `local` &&
      M != null &&
      !N &&
      i === `codex` &&
      d.hostId === `local` &&
      !s,
    V;
  return (n[10] === B ? (V = n[11]) : ((V = { isEligible: B }), (n[10] = B), (n[11] = V)), V);
}
var P, F, I, L;
function R() {
  return (R = e(() => {
    ((P = a()),
      s(),
      (F = i()),
      h(),
      A(),
      y(),
      n(),
      m(),
      g(),
      E(),
      x(),
      d(),
      w(),
      D(),
      (I = u(`worktree-onboarding-state-v1`, `eligible`)),
      (L = r(f, ({ get: e }) => M({ prompt: e(b) }))));
  }))();
}
export { N as n, I as r, R as t };
//# sourceMappingURL=worktree-onboarding-state-971393c21530.js.map
