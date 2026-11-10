import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as n,
  Cot as r,
  Dut as i,
  Kat as a,
  Pxt as o,
  aSt as s,
  art as c,
  nSt as l,
  qat as u,
  srt as d,
  wot as f,
} from "./app-shared-bbfeca5e5737.js";
import { SFr as p, bFr as m, iNr as h, rNr as g, xFr as _ } from "./app-initial-5851df3f6cb1.js";
function v(e, t, n, r) {
  let i = S(t);
  e.set(M, (e) => {
    let a = e ?? {},
      o = a[i] ?? T(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function y(e) {
  (p(`${j}:`), e.set(M, {}));
}
function b(e, t, n, r) {
  e.query
    .snapshot(N, t)
    .setData((e) =>
      e == null
        ? e
        : {
            file: {
              ...e.file,
              suggestions: e.file.suggestions.map((e) => (e.id === n ? { ...e, status: r } : e)),
            },
          },
    );
}
function x(e) {
  return e == null ? null : Object.keys(e);
}
function S({ domain: e, hostId: t, projectRoot: n }) {
  return e == null ? `${j}:${t}:${w(n)}` : `${j}:${t}:${w(n)}:${e}`;
}
function C(e, t) {
  let n = S(t),
    r = e(M)?.[n];
  if (r != null) return r;
  if (t.domain == null) return T(t);
}
function w(e) {
  return e ?? ``;
}
function T(e) {
  return m(E(e), void 0);
}
function E({ hostId: e, projectRoot: t }) {
  return `${j}:${e}:${w(t)}`;
}
function D(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, O.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === k)) break;
  }
  return n;
}
var O, k, A, j, M, N, P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    ((O = t(i(), 1)),
      o(),
      u(),
      f(),
      _(),
      g(),
      d(),
      (k = 3),
      (A = 1e3),
      (j = `ambient-suggestions:default-statuses`),
      (M = h(j, {})),
      (N = c(r, `ambient-suggestions`, ({ projectRoot: e }) => ({ enabled: e != null }))),
      (P = n(r, () => ({
        enabled: a.ambientSuggestions != null,
        queryFn: () => a.ambientSuggestions?.getGenerationStatuses(),
        queryKey: [`ambient-suggestions-generation-statuses`],
        refetchInterval: A,
        staleTime: A,
      }))),
      (F = c(
        r,
        `ambient-suggestions-refresh`,
        ({ domain: e, hostId: t, projectRoot: n, staleTimeMs: r, surface: i }) => ({
          enabled: n != null,
          gcTime: r,
          params: { domain: e, hostId: t, projectRoot: n, surface: i },
          select: () => !0,
          staleTime: r,
        }),
      )),
      (I = s(r, (e) => null)),
      (L = l(r, (e, { get: t }) => x(C(t, e)))),
      (R = l(r, (e, { get: t }) => {
        let n = t(N, e);
        return n.data != null || n.isError;
      })),
      (z = l(r, ({ domain: e, hostId: t, projectRoot: n }, { get: r }) => {
        let i = r(N, { domain: e, hostId: t, projectRoot: n }).data?.file;
        return D(i?.currentSuggestionIds ?? [], i?.suggestions ?? []);
      })));
  }))();
}
var V;
function H() {
  return (H = e(() => {
    (g(), (V = h(`electron:new-chat-suggestion-source-debug-override`, null)));
  }))();
}
export {
  N as a,
  B as c,
  b as d,
  v as f,
  P as i,
  L as l,
  V as n,
  R as o,
  z as p,
  I as r,
  F as s,
  H as t,
  y as u,
};
//# sourceMappingURL=new-chat-suggestion-source-debug-state-5aa1fcbbbc9f.js.map
