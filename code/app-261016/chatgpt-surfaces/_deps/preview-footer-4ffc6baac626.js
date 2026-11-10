import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  LNt as i,
  NSt as a,
  OB as o,
  PBt as s,
  Qst as c,
  S3 as l,
  USt as u,
  VSt as d,
  Vrt as f,
  XOt as p,
  ZSt as m,
  iCt as h,
  okt as g,
  qrt as _,
  tkt as v,
  vst as y,
  x3 as b,
  yst as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $dt as S,
  HJ as C,
  Qdt as w,
  VJ as T,
  aft as E,
  eft as D,
  iRr as O,
  m0 as k,
  nft as A,
  oft as j,
  oun as M,
  p0 as N,
  rft as P,
  sRr as F,
  vun as I,
} from "./app-initial-ad16eaadf81f.js";
import { n as L, t as R } from "./preview-footer-controls-5643864f8a3d.js";
function z(e) {
  let n = (0, B.c)(36),
    { conversationId: i, kind: a } = e,
    o = t(c),
    s = g(),
    l = d(),
    f = u(),
    p;
  n[0] !== l.hash || n[1] !== l.pathname || n[2] !== l.search || n[3] !== f || n[4] !== o
    ? ((p = () => {
        (S(o), f({ pathname: l.pathname, search: l.search, hash: l.hash }, { replace: !0, state: null }));
      }),
      (n[0] = l.hash),
      (n[1] = l.pathname),
      (n[2] = l.search),
      (n[3] = f),
      (n[4] = o),
      (n[5] = p))
    : (p = n[5]);
  let m = p,
    y = h(A),
    C;
  n[6] !== i || n[7] !== y
    ? ((C = y?.find((e) => E(e.task) === `hosted:${i}`)), (n[6] = i), (n[7] = y), (n[8] = C))
    : (C = n[8]);
  let D = C,
    j;
  n[9] !== i || n[10] !== o
    ? ((j = () => {
        let e = o.get(P);
        return e != null && E(e) === `hosted:${i}` ? w(o, e) : void 0;
      }),
      (n[9] = i),
      (n[10] = o),
      (n[11] = j))
    : (j = n[11]);
  let M;
  n[12] !== i || n[13] !== a || n[14] !== o
    ? ((M = async () => {
        if (a === `cloud`) {
          (await O.safePost(`/wham/tasks/{task_id}/recover`, { parameters: { path: { task_id: i } } }),
            k(o, i, !1));
          return;
        }
        await I({ scope: o, conversationId: i });
      }),
      (n[12] = i),
      (n[13] = a),
      (n[14] = o),
      (n[15] = M))
    : (M = n[15]);
  let N;
  n[16] !== i || n[17] !== m || n[18] !== a || n[19] !== o
    ? ((N = (e, t, n) => {
        n?.(`restored`);
        let s = o.get(_).info((0, V.jsx)(v, { ...T.unarchiveSuccessPlain }), {
          leading: (0, V.jsx)(r, { "aria-hidden": !1, asset: b }),
          primaryAction: {
            label: (0, V.jsx)(v, { ...T.viewNow }),
            onClick: () => {
              (s.close(), m());
            },
          },
          id: `unarchive-thread-${a}:${i}`,
        });
      }),
      (n[16] = i),
      (n[17] = m),
      (n[18] = a),
      (n[19] = o),
      (n[20] = N))
    : (N = n[20]);
  let F;
  n[21] !== s || n[22] !== o
    ? ((F = (e, t, n) => {
        (n?.(null),
          o
            .get(_)
            .danger(s.formatMessage(T.unarchiveError), {
              errorAnalytics: { toastId: `previewFooter.onError.unarchiveError` },
            }));
      }),
      (n[21] = s),
      (n[22] = o),
      (n[23] = F))
    : (F = n[23]);
  let L;
  n[24] !== j || n[25] !== M || n[26] !== N || n[27] !== F
    ? ((L = { onMutate: j, mutationFn: M, onSuccess: N, onError: F }),
      (n[24] = j),
      (n[25] = M),
      (n[26] = N),
      (n[27] = F),
      (n[28] = L))
    : (L = n[28]);
  let { mutate: z, isPending: H, isSuccess: U } = x(L),
    W = U || D?.status === `restored`,
    G = H || D?.status === `restoring`,
    K;
  n[29] === z ? (K = n[30]) : ((K = () => z()), (n[29] = z), (n[30] = K));
  let q;
  return (
    n[31] !== m || n[32] !== K || n[33] !== W || n[34] !== G
      ? ((q = (0, V.jsx)(R, { restored: W, restoring: G, onUnarchive: K, onDone: m })),
        (n[31] = m),
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
    ((B = s()), l(), y(), m(), p(), a(), M(), o(), f(), N(), n(), C(), F(), L(), D(), j(), (V = i()));
  }))();
}
export { H as n, z as t };
//# sourceMappingURL=preview-footer-4ffc6baac626.js.map
