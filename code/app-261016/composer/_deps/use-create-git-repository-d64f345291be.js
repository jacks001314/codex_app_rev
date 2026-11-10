import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Cit as r,
  Lst as i,
  PBt as a,
  Qst as o,
  Rst as s,
  Vrt as c,
  XOt as l,
  ZSt as u,
  bit as d,
  cmt as f,
  okt as p,
  qrt as m,
  sct as h,
  vst as g,
  yst as _,
} from "./app-shared-2feb3d4c6fcc.js";
import { Bcr as v, Rcr as y, Vcr as b } from "./app-initial-ad16eaadf81f.js";
function x(e) {
  let n = (0, S.c)(31),
    { cwd: r, hostConfig: i, onErrorMessage: a, showErrorToast: c } = e,
    l = c !== void 0 && c,
    u = t(o),
    h = s(),
    g = p(),
    v;
  n[0] === i ? (v = n[1]) : ((v = y(i)), (n[0] = i), (n[1] = v));
  let x = v,
    C = r ?? ``,
    w;
  n[2] !== x || n[3] !== C
    ? ((w = [`git`, `init-repo`, x, C]), (n[2] = x), (n[3] = C), (n[4] = w))
    : (w = n[4]);
  let T;
  n[5] !== r || n[6] !== i
    ? ((T = async () => {
        if (r == null) throw Error(`Missing git context`);
        await b(`git`).request({
          method: `git-init-repo`,
          params: { cwd: f(r), hostConfig: i, operationSource: `review_model` },
        });
      }),
      (n[5] = r),
      (n[6] = i),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] !== r || n[9] !== x || n[10] !== g || n[11] !== h || n[12] !== u
    ? ((E = async () => {
        u.get(m).success(
          g.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [h.invalidateQueries({ queryKey: d(`git-origins`) })];
        (r != null && e.push(h.invalidateQueries({ queryKey: [`git`, `metadata`, x, r] })),
          await Promise.all(e));
      }),
      (n[8] = r),
      (n[9] = x),
      (n[10] = g),
      (n[11] = h),
      (n[12] = u),
      (n[13] = E))
    : (E = n[13]);
  let D;
  n[14] !== g || n[15] !== a || n[16] !== u || n[17] !== l
    ? ((D = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (l &&
          u
            .get(m)
            .danger(
              g.formatMessage(
                {
                  id: `codex.review.noDiff.gitInit.error`,
                  defaultMessage: `Git init failed: {message}`,
                  description: `Error text shown when git initialization fails from the diff empty state`,
                },
                { message: t },
              ),
              { errorAnalytics: { toastId: `codex.review.noDiff.gitInit.error` } },
            ),
          a?.(t));
      }),
      (n[14] = g),
      (n[15] = a),
      (n[16] = u),
      (n[17] = l),
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
  let k = _(O),
    A;
  n[24] !== r || n[25] !== k
    ? ((A = async () => {
        if (!(r == null || k.isPending))
          try {
            await k.mutateAsync();
          } catch {
            return;
          }
      }),
      (n[24] = r),
      (n[25] = k),
      (n[26] = A))
    : (A = n[26]);
  let j = A,
    M = r != null,
    N;
  return (
    n[27] !== j || n[28] !== k.isPending || n[29] !== M
      ? ((N = { canCreateGitRepository: M, createGitRepository: j, isCreatingGitRepository: k.isPending }),
        (n[27] = j),
        (n[28] = k.isPending),
        (n[29] = M),
        (n[30] = N))
      : (N = n[30]),
    N
  );
}
var S;
function C() {
  return (C = e(() => {
    ((S = a()), g(), i(), u(), h(), l(), c(), n(), r(), v());
  }))();
}
export { x as n, C as t };
//# sourceMappingURL=use-create-git-repository-d64f345291be.js.map
