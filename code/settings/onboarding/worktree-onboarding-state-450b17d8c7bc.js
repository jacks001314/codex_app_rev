import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AJ as r,
  Amn as i,
  DJ as a,
  DX as o,
  EA as s,
  EX as c,
  F3t as l,
  JA as u,
  KYt as d,
  N3t as f,
  O3t as p,
  OJ as m,
  a3t as h,
  aYt as g,
  c6t as _,
  iHt as v,
  kA as y,
  kmn as b,
  o3t as x,
  qYt as S,
  rHt as C,
  sYt as w,
  zJ as T,
} from "./app-initial-f094ef01c64d.js";
import { n as E, t as D } from "./use-codex-worktrees-4816d4e23919.js";
function O(e, t, n) {
  t.hostId === `local` &&
    (t.isCodexWorktree || n) &&
    e.get(N) === `eligible` &&
    e.set(N, `succeeded`);
}
function k({ prompt: e }) {
  return /\b(?:worktrees?|parallel|another task|separate task|isolat(?:e|ed|ion)|keep my changes|without disturbing)\b/i.test(
    e.trim(),
  );
}
function A(e) {
  let t = (0, j.c)(12),
    { enabled: r, entryPoint: i, isLocalModeRemote: c } = e,
    u = c !== void 0 && c,
    d = n(h),
    p = l(o),
    m = l(N),
    g = S(p.hostId),
    _;
  t[0] !== p.cwd || t[1] !== p.hostId
    ? ((_ = a({ cwd: p.cwd, hostId: p.hostId })), (t[0] = p.cwd), (t[1] = p.hostId), (t[2] = _))
    : (_ = t[2]);
  let v = f(s, _),
    y = l(P),
    b = w(`2634243883`),
    x = w(`505458`),
    C = r && m === `eligible` && b && y,
    T;
  t[3] === C ? (T = t[4]) : ((T = { enabled: C }), (t[3] = C), (t[4] = T));
  let { data: D } = E(g, `home_page`, T),
    k = D != null && D.worktrees.length > 0,
    A,
    F;
  (t[5] !== k || t[6] !== p || t[7] !== d
    ? ((A = () => {
        O(d, p, k);
      }),
      (F = [k, p, d]),
      (t[5] = k),
      (t[6] = p),
      (t[7] = d),
      (t[8] = A),
      (t[9] = F))
    : ((A = t[8]), (F = t[9])),
    (0, M.useEffect)(A, F));
  let I =
      C &&
      x &&
      p.kind === `git` &&
      v === `local` &&
      D != null &&
      !k &&
      i === `codex` &&
      p.hostId === `local` &&
      !u,
    L;
  return (t[10] === I ? (L = t[11]) : ((L = { isEligible: I }), (t[10] = I), (t[11] = L)), L);
}
var j,
  M,
  N,
  P,
  F = e(() => {
    ((j = b()),
      p(),
      (M = t(i(), 1)),
      D(),
      c(),
      x(),
      T(),
      d(),
      g(),
      C(),
      m(),
      u(),
      (N = v(`worktree-onboarding-state-v1`, `eligible`)),
      (P = _(r, ({ get: e }) => k({ prompt: e(y) }))));
  });
export { A as n, N as r, F as t };
//# sourceMappingURL=worktree-onboarding-state-450b17d8c7bc.js.map
