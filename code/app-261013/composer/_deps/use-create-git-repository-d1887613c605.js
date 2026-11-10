import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Iot as n,
  Ixt as r,
  Lot as i,
  Pxt as a,
  VDt as o,
  hot as s,
  irt as c,
  jDt as l,
  lot as u,
  nst as d,
  qft as f,
  rst as p,
  srt as m,
  tst as h,
  vzt as g,
  wot as _,
} from "./app-shared-bbfeca5e5737.js";
import { far as v, par as y, uar as b } from "./app-initial-5851df3f6cb1.js";
function x(e) {
  let n = (0, S.c)(31),
    { cwd: a, hostConfig: l, onErrorMessage: u, showErrorToast: p } = e,
    m = p !== void 0 && p,
    h = r(t),
    g = d(),
    _ = o(),
    v;
  n[0] === l ? (v = n[1]) : ((v = b(l)), (n[0] = l), (n[1] = v));
  let x = v,
    C = a ?? ``,
    w;
  n[2] !== x || n[3] !== C
    ? ((w = [`git`, `init-repo`, x, C]), (n[2] = x), (n[3] = C), (n[4] = w))
    : (w = n[4]);
  let T;
  n[5] !== a || n[6] !== l
    ? ((T = async () => {
        if (a == null) throw Error(`Missing git context`);
        await y(`git`).request({
          method: `git-init-repo`,
          params: { cwd: f(a), hostConfig: l, operationSource: `review_model` },
        });
      }),
      (n[5] = a),
      (n[6] = l),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] !== a || n[9] !== x || n[10] !== _ || n[11] !== g || n[12] !== h
    ? ((E = async () => {
        h.get(s).success(
          _.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [g.invalidateQueries({ queryKey: c(`git-origins`) })];
        (a != null && e.push(g.invalidateQueries({ queryKey: [`git`, `metadata`, x, a] })),
          await Promise.all(e));
      }),
      (n[8] = a),
      (n[9] = x),
      (n[10] = _),
      (n[11] = g),
      (n[12] = h),
      (n[13] = E))
    : (E = n[13]);
  let D;
  n[14] !== _ || n[15] !== u || n[16] !== h || n[17] !== m
    ? ((D = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (m &&
          h
            .get(s)
            .danger(
              _.formatMessage(
                {
                  id: `codex.review.noDiff.gitInit.error`,
                  defaultMessage: `Git init failed: {message}`,
                  description: `Error text shown when git initialization fails from the diff empty state`,
                },
                { message: t },
              ),
              { errorAnalytics: { toastId: `codex.review.noDiff.gitInit.error` } },
            ),
          u?.(t));
      }),
      (n[14] = _),
      (n[15] = u),
      (n[16] = h),
      (n[17] = m),
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
  let k = i(O),
    A;
  n[24] !== a || n[25] !== k
    ? ((A = async () => {
        if (!(a == null || k.isPending))
          try {
            await k.mutateAsync();
          } catch {
            return;
          }
      }),
      (n[24] = a),
      (n[25] = k),
      (n[26] = A))
    : (A = n[26]);
  let j = A,
    M = a != null,
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
    ((S = g()), n(), h(), a(), p(), l(), u(), _(), m(), v());
  }))();
}
export { x as n, C as t };
//# sourceMappingURL=use-create-git-repository-d1887613c605.js.map
