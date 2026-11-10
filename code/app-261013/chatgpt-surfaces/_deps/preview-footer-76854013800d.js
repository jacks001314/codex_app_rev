import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  E4 as n,
  Ext as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  Lot as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  T4 as d,
  VDt as f,
  Vxt as p,
  _xt as m,
  hot as h,
  jDt as g,
  lot as _,
  vzt as v,
  wot as y,
  wxt as b,
  xMt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  E$ as S,
  Jut as C,
  Qut as w,
  T$ as T,
  Yut as E,
  Zut as D,
  edt as O,
  iPr as k,
  qut as A,
  sPr as j,
  son as M,
  tdt as N,
  vq as P,
  yon as F,
  yq as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as L, t as R } from "./preview-footer-controls-b897d8cb297b.js";
function z(e) {
  let n = (0, B.c)(36),
    { conversationId: a, kind: l } = e,
    u = o(t),
    m = f(),
    g = b(),
    _ = r(),
    v;
  n[0] !== g.hash || n[1] !== g.pathname || n[2] !== g.search || n[3] !== _ || n[4] !== u
    ? ((v = () => {
        (C(u), _({ pathname: g.pathname, search: g.search, hash: g.hash }, { replace: !0, state: null }));
      }),
      (n[0] = g.hash),
      (n[1] = g.pathname),
      (n[2] = g.search),
      (n[3] = _),
      (n[4] = u),
      (n[5] = v))
    : (v = n[5]);
  let y = v,
    x = p(D),
    T;
  n[6] !== a || n[7] !== x
    ? ((T = x?.find((e) => O(e.task) === `hosted:${a}`)), (n[6] = a), (n[7] = x), (n[8] = T))
    : (T = n[8]);
  let E = T,
    j;
  n[9] !== a || n[10] !== u
    ? ((j = () => {
        let e = u.get(w);
        return e != null && O(e) === `hosted:${a}` ? A(u, e) : void 0;
      }),
      (n[9] = a),
      (n[10] = u),
      (n[11] = j))
    : (j = n[11]);
  let M;
  n[12] !== a || n[13] !== l || n[14] !== u
    ? ((M = async () => {
        if (l === `cloud`) {
          (await k.safePost(`/wham/tasks/{task_id}/recover`, { parameters: { path: { task_id: a } } }),
            S(u, a, !1));
          return;
        }
        await F({ scope: u, conversationId: a });
      }),
      (n[12] = a),
      (n[13] = l),
      (n[14] = u),
      (n[15] = M))
    : (M = n[15]);
  let N;
  n[16] !== a || n[17] !== y || n[18] !== l || n[19] !== u
    ? ((N = (e, t, n) => {
        n?.(`restored`);
        let r = u.get(h).info((0, V.jsx)(i, { ...P.unarchiveSuccessPlain }), {
          leading: (0, V.jsx)(c, { "aria-hidden": !1, asset: d }),
          primaryAction: {
            label: (0, V.jsx)(i, { ...P.viewNow }),
            onClick: () => {
              (r.close(), y());
            },
          },
          id: `unarchive-thread-${l}:${a}`,
        });
      }),
      (n[16] = a),
      (n[17] = y),
      (n[18] = l),
      (n[19] = u),
      (n[20] = N))
    : (N = n[20]);
  let I;
  n[21] !== m || n[22] !== u
    ? ((I = (e, t, n) => {
        (n?.(null),
          u
            .get(h)
            .danger(m.formatMessage(P.unarchiveError), {
              errorAnalytics: { toastId: `previewFooter.onError.unarchiveError` },
            }));
      }),
      (n[21] = m),
      (n[22] = u),
      (n[23] = I))
    : (I = n[23]);
  let L;
  n[24] !== j || n[25] !== M || n[26] !== N || n[27] !== I
    ? ((L = { onMutate: j, mutationFn: M, onSuccess: N, onError: I }),
      (n[24] = j),
      (n[25] = M),
      (n[26] = N),
      (n[27] = I),
      (n[28] = L))
    : (L = n[28]);
  let { mutate: z, isPending: H, isSuccess: U } = s(L),
    W = U || E?.status === `restored`,
    G = H || E?.status === `restoring`,
    K;
  n[29] === z ? (K = n[30]) : ((K = () => z()), (n[29] = z), (n[30] = K));
  let q;
  return (
    n[31] !== y || n[32] !== K || n[33] !== W || n[34] !== G
      ? ((q = (0, V.jsx)(R, { restored: W, restoring: G, onUnarchive: K, onDone: y })),
        (n[31] = y),
        (n[32] = K),
        (n[33] = W),
        (n[34] = G),
        (n[35] = q))
      : (q = n[35]),
    q
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = v()), n(), a(), u(), g(), m(), M(), l(), _(), T(), y(), I(), j(), L(), E(), N(), (V = x()));
  }))();
}
export { H as n, z as t };
//# sourceMappingURL=preview-footer-76854013800d.js.map
