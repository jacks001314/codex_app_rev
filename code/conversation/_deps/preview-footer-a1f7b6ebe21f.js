import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  Apt as n,
  Cpn as r,
  F3t as i,
  FKt as a,
  Gi as o,
  Hi as s,
  IXt as c,
  JXt as l,
  KXt as u,
  Ki as d,
  Not as f,
  O3t as p,
  Opn as m,
  RKt as h,
  Spn as g,
  Ui as _,
  Vi as v,
  Xi as y,
  Yi as b,
  a3t as x,
  d3t as S,
  gMt as C,
  hMt as w,
  hmn as T,
  jXt as E,
  kXt as D,
  kmn as O,
  kpt as k,
  o3t as A,
  s3t as j,
  zot as M,
} from "./app-initial-f094ef01c64d.js";
import { Hm as N, Lm as P, Rm as F, Vm as I } from "./app-primary-4c40d73a1074.js";
import { n as L, t as R } from "./preview-footer-controls-38ae3d627c7c.js";
function z(e) {
  let n = (0, B.c)(32),
    { conversationId: c, kind: f } = e,
    p = t(x),
    h = m(),
    g = u(),
    _ = l(),
    y = i(o),
    C;
  n[0] !== c || n[1] !== y
    ? ((C = y?.find((e) => b(e.task) === `hosted:${c}`)), (n[0] = c), (n[1] = y), (n[2] = C))
    : (C = n[2]);
  let T = C,
    D;
  n[3] !== c || n[4] !== p
    ? ((D = () => {
        let e = p.get(d);
        return e != null && b(e) === `hosted:${c}` ? v(p, e) : void 0;
      }),
      (n[3] = c),
      (n[4] = p),
      (n[5] = D))
    : (D = n[5]);
  let O, A;
  n[6] !== c || n[7] !== f || n[8] !== p
    ? ((O = async () => {
        if (f === `cloud`) {
          (await a.safePost(`/wham/tasks/{task_id}/recover`, {
            parameters: { path: { task_id: c } },
          }),
            N(p, c, !1));
          return;
        }
        await M({ scope: p, conversationId: c });
      }),
      (A = (e, t, n) => {
        (n?.(`restored`),
          p.get(E).info((0, V.jsx)(r, { ...P.unarchiveSuccessPlain }), {
            leading: (0, V.jsx)(w, { "aria-hidden": !1, asset: k }),
            id: `unarchive-thread-${f}:${c}`,
          }));
      }),
      (n[6] = c),
      (n[7] = f),
      (n[8] = p),
      (n[9] = O),
      (n[10] = A))
    : ((O = n[9]), (A = n[10]));
  let j;
  n[11] !== h || n[12] !== p
    ? ((j = (e, t, n) => {
        (n?.(null), p.get(E).danger(h.formatMessage(P.unarchiveError)));
      }),
      (n[11] = h),
      (n[12] = p),
      (n[13] = j))
    : (j = n[13]);
  let F;
  n[14] !== D || n[15] !== O || n[16] !== A || n[17] !== j
    ? ((F = { onMutate: D, mutationFn: O, onSuccess: A, onError: j }),
      (n[14] = D),
      (n[15] = O),
      (n[16] = A),
      (n[17] = j),
      (n[18] = F))
    : (F = n[18]);
  let { mutate: I, isPending: L, isSuccess: z } = S(F),
    H = z || T?.status === `restored`,
    U = L || T?.status === `restoring`,
    W;
  n[19] === I ? (W = n[20]) : ((W = () => I()), (n[19] = I), (n[20] = W));
  let G;
  n[21] !== g.hash || n[22] !== g.pathname || n[23] !== g.search || n[24] !== _ || n[25] !== p
    ? ((G = () => {
        (s(p),
          _(
            { pathname: g.pathname, search: g.search, hash: g.hash },
            { replace: !0, state: null },
          ));
      }),
      (n[21] = g.hash),
      (n[22] = g.pathname),
      (n[23] = g.search),
      (n[24] = _),
      (n[25] = p),
      (n[26] = G))
    : (G = n[26]);
  let K;
  return (
    n[27] !== G || n[28] !== H || n[29] !== U || n[30] !== W
      ? ((K = (0, V.jsx)(R, { restored: H, restoring: U, onUnarchive: W, onDone: G })),
        (n[27] = G),
        (n[28] = H),
        (n[29] = U),
        (n[30] = W),
        (n[31] = K))
      : (K = n[31]),
    K
  );
}
var B,
  V,
  H = e(() => {
    ((B = O()),
      n(),
      j(),
      p(),
      g(),
      c(),
      f(),
      C(),
      D(),
      I(),
      A(),
      F(),
      h(),
      L(),
      _(),
      y(),
      (V = T()));
  });
export { H as n, z as t };
//# sourceMappingURL=preview-footer-a1f7b6ebe21f.js.map
