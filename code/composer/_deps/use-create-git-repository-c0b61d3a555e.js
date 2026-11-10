import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  B6t as n,
  D3t as r,
  O3t as i,
  Opn as a,
  Spn as o,
  _Jt as s,
  _Ut as c,
  a3t as l,
  d3t as u,
  e9t as d,
  gUt as f,
  hUt as p,
  jXt as m,
  kXt as h,
  kmn as g,
  lUt as _,
  mJt as v,
  o3t as y,
  s3t as b,
  uUt as x,
} from "./app-initial-f094ef01c64d.js";
function S(e) {
  let n = (0, C.c)(31),
    { cwd: i, hostConfig: o, onErrorMessage: s, showErrorToast: f } = e,
    p = f !== void 0 && f,
    h = t(l),
    g = r(),
    y = a(),
    b;
  n[0] === o ? (b = n[1]) : ((b = _(o)), (n[0] = o), (n[1] = b));
  let x = b,
    S = i ?? ``,
    w;
  n[2] !== x || n[3] !== S
    ? ((w = [`git`, `init-repo`, x, S]), (n[2] = x), (n[3] = S), (n[4] = w))
    : (w = n[4]);
  let T;
  n[5] !== i || n[6] !== o
    ? ((T = async () => {
        if (i == null) throw Error(`Missing git context`);
        await c(`git`).request({
          method: `git-init-repo`,
          params: { cwd: d(i), hostConfig: o, operationSource: `review_model` },
        });
      }),
      (n[5] = i),
      (n[6] = o),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] !== i || n[9] !== x || n[10] !== y || n[11] !== g || n[12] !== h
    ? ((E = async () => {
        h.get(m).success(
          y.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [g.invalidateQueries({ queryKey: v(`git-origins`) })];
        (i != null && e.push(g.invalidateQueries({ queryKey: [`git`, `metadata`, x, i] })),
          await Promise.all(e));
      }),
      (n[8] = i),
      (n[9] = x),
      (n[10] = y),
      (n[11] = g),
      (n[12] = h),
      (n[13] = E))
    : (E = n[13]);
  let D;
  n[14] !== y || n[15] !== s || n[16] !== h || n[17] !== p
    ? ((D = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (p &&
          h.get(m).danger(
            y.formatMessage(
              {
                id: `codex.review.noDiff.gitInit.error`,
                defaultMessage: `Git init failed: {message}`,
                description: `Error text shown when git initialization fails from the diff empty state`,
              },
              { message: t },
            ),
          ),
          s?.(t));
      }),
      (n[14] = y),
      (n[15] = s),
      (n[16] = h),
      (n[17] = p),
      (n[18] = D))
    : (D = n[18]);
  let O;
  n[19] !== w || n[20] !== T || n[21] !== E || n[22] !== D
    ? ((O = { mutationKey: w, mutationFn: T, onSuccess: E, onError: D }),
      (n[19] = w),
      (n[20] = T),
      (n[21] = E),
      (n[22] = D),
      (n[23] = O))
    : (O = n[23]);
  let k = u(O),
    A;
  n[24] !== i || n[25] !== k
    ? ((A = async () => {
        if (!(i == null || k.isPending))
          try {
            await k.mutateAsync();
          } catch {
            return;
          }
      }),
      (n[24] = i),
      (n[25] = k),
      (n[26] = A))
    : (A = n[26]);
  let j = A,
    M = i != null,
    N;
  return (
    n[27] !== j || n[28] !== k.isPending || n[29] !== M
      ? ((N = {
          canCreateGitRepository: M,
          createGitRepository: j,
          isCreatingGitRepository: k.isPending,
        }),
        (n[27] = j),
        (n[28] = k.isPending),
        (n[29] = M),
        (n[30] = N))
      : (N = n[30]),
    N
  );
}
var C,
  w = e(() => {
    ((C = g()), b(), i(), n(), o(), h(), p(), x(), y(), s(), f());
  });
export { S as n, w as t };
//# sourceMappingURL=use-create-git-repository-c0b61d3a555e.js.map
