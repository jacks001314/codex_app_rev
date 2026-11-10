import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  B7t as n,
  DJt as r,
  Dqt as i,
  EJt as a,
  GJ as o,
  I7t as s,
  KJ as c,
  KKt as l,
  KYt as u,
  N3t as d,
  O3t as f,
  Rqt as p,
  S3t as m,
  TJt as h,
  Uqt as g,
  YKt as _,
  ZKt as v,
  _Ut as y,
  _qt as b,
  a3t as x,
  bqt as S,
  gUt as C,
  gqt as w,
  i3t as T,
  i6t as E,
  kmn as D,
  lUt as O,
  o3t as k,
  qJ as A,
  qKt as j,
  qqt as M,
  r3t as N,
  s3t as P,
  uUt as F,
  wJt as I,
  z7t as L,
} from "./app-initial-f094ef01c64d.js";
async function R(e, t, i, a) {
  if (t === `local`) {
    await _(e, i, a);
    return;
  }
  let s = e.query.snapshot(p, t),
    c = await s.getOrFetch();
  await s.cancel();
  let l = e.get(p, t).data?.configWriteTarget;
  s.setData({
    ...c,
    response: {
      ...c.response,
      config: Object.assign(structuredClone(c.response.config), {
        desktop: { ...c.response.config.desktop, [i.key]: a },
      }),
    },
  });
  try {
    await N(e, t).sendRequest(`config/batchWrite`, {
      edits: [{ keyPath: `desktop.${i.key}`, value: a, mergeStrategy: `replace` }],
      filePath: l?.filePath ?? null,
      expectedVersion: null,
      reloadUserConfig: !0,
    });
  } catch (e) {
    throw (s.setData(c), e);
  } finally {
    let a = [
      [...S, t],
      [...w, t],
      [...b, t],
    ];
    (i.key === n.worktreeRoot.key &&
      a.push(o(t), A(t), e.query.snapshot(g, { hostId: t }).queryKey),
      await Promise.all(a.map((t) => r(e.queryClient, t))));
  }
}
var z,
  B = e(() => {
    (f(),
      t(),
      T(),
      i(),
      a(),
      k(),
      M(),
      j(),
      u(),
      c(),
      (z = E(x, (e, { get: t }) => {
        if (e === `local`)
          return t(v)
            ? s({
                [n.worktreeRoot.key]: l(t, n.worktreeRoot),
                [L.autoCleanupEnabled.key]: l(t, L.autoCleanupEnabled),
                [L.keepCount.key]: l(t, L.keepCount),
              })
            : null;
        let r = t(p, e).data;
        return r?.configReadSucceeded === !0 ? s(r.config.desktop) : null;
      })));
  });
function V(e, t, n) {
  let r = (0, H.c)(13),
    i;
  r[0] === e ? (i = r[1]) : ((i = O(e)), (r[0] = e), (r[1] = i));
  let a = i,
    s = d(z, a),
    c = s?.worktreesRoot ?? null,
    l = s != null && (n?.enabled ?? !0),
    u;
  r[2] !== a || r[3] !== c ? ((u = o(a, c)), (r[2] = a), (r[3] = c), (r[4] = u)) : (u = r[4]);
  let f;
  r[5] !== e || r[6] !== t || r[7] !== c
    ? ((f = (n) => {
        let { signal: r } = n;
        return y(`git`).request({
          method: `codex-worktrees`,
          params: { hostConfig: e, operationSource: t, worktreesRoot: c },
          signal: r,
        });
      }),
      (r[5] = e),
      (r[6] = t),
      (r[7] = c),
      (r[8] = f))
    : (f = r[8]);
  let p;
  return (
    r[9] !== l || r[10] !== u || r[11] !== f
      ? ((p = { enabled: l, queryKey: u, queryFn: f, staleTime: I.INFINITE, gcTime: 18e5 }),
        (r[9] = l),
        (r[10] = u),
        (r[11] = f),
        (r[12] = p))
      : (p = r[12]),
    m(p)
  );
}
var H,
  U = e(() => {
    ((H = D()), P(), f(), h(), C(), B(), c(), F());
  });
export { z as a, R as i, V as n, B as r, U as t };
//# sourceMappingURL=use-codex-worktrees-4816d4e23919.js.map
