import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as n,
  Fdt as r,
  Qst as i,
  SCt as a,
  ZSt as o,
  ast as s,
  dCt as c,
  gCt as l,
  ist as u,
  mCt as d,
  nyt as f,
  sct as p,
  tit as m,
  yCt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import { ALr as g, ILr as _, LLr as v, RLr as y, kLr as b } from "./app-initial-ad16eaadf81f.js";
import { a as x, i as S, o as C, r as w, t as T } from "./requests-ddc63fb269df.js";
function E(e, t, n, r) {
  let i = A(t);
  e.set(B, (e) => {
    let a = e ?? {},
      o = a[i] ?? N(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function D(e) {
  (y(`${z}:`), e.set(B, {}));
}
function O(e, t, n, r) {
  e.query
    .snapshot(V, t)
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
function k(e) {
  return e == null ? null : Object.keys(e);
}
function A({ domain: e, hostId: t, projectRoot: n }) {
  return e == null ? `${z}:${t}:${M(n)}` : `${z}:${t}:${M(n)}:${e}`;
}
function j(e, t) {
  let n = A(t),
    r = e(B)?.[n];
  if (r != null) return r;
  if (t.domain == null) return N(t);
}
function M(e) {
  return e ?? ``;
}
function N(e) {
  return _(P(e), void 0);
}
function P({ hostId: e, projectRoot: t }) {
  return `${z}:${e}:${M(t)}`;
}
function F(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, I.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === L)) break;
  }
  return n;
}
var I, L, R, z, B, V, H, U, W, G, K, q, J, Y;
function X() {
  return (X = e(() => {
    ((I = t(r(), 1)),
      o(),
      p(),
      s(),
      n(),
      v(),
      b(),
      x(),
      (L = 3),
      (R = 1e3),
      (z = `ambient-suggestions:default-statuses`),
      (B = g(z, {})),
      (V = d(i, (e) => ({
        enabled: e.projectRoot != null,
        queryKey: w(e),
        queryFn: async ({ signal: t }) => {
          let n = u?.ambientSuggestions;
          return n == null ? { file: f } : m(n.read(e), t);
        },
      }))),
      (H = c(i, ({ scope: e }) => ({
        networkMode: `always`,
        mutationFn: (e) => C(e),
        onSuccess: () => {
          (e.queryClient.invalidateQueries({ queryKey: T }), e.query.invalidate(W));
        },
      }))),
      (U = c(i, ({ scope: e }) => ({
        networkMode: `always`,
        mutationFn: async (e) => {
          let t = u?.ambientSuggestions;
          return t == null ? { file: f } : m(t.setStatus(e));
        },
        onMutate: (t) => {
          O(e, { domain: t.domain, hostId: t.hostId, projectRoot: t.projectRoot }, t.suggestionId, t.status);
        },
        onSuccess: (t, n) => {
          e.query.setData(V, { domain: n.domain, hostId: n.hostId, projectRoot: n.projectRoot }, t);
        },
      }))),
      (W = l(i, () => ({
        enabled: u.ambientSuggestions != null,
        queryFn: () => u.ambientSuggestions?.getGenerationStatuses(),
        queryKey: [`ambient-suggestions-generation-statuses`],
        refetchInterval: R,
        staleTime: R,
      }))),
      (G = d(i, ({ domain: e, hostId: t, projectRoot: n, staleTimeMs: r, surface: i }) => ({
        enabled: n != null,
        gcTime: r,
        queryKey: S({ domain: e, hostId: t, projectRoot: n, surface: i }),
        queryFn: async ({ signal: r }) => (
          await C({ domain: e, hostId: t, projectRoot: n, surface: i }, r),
          !0
        ),
        staleTime: r,
      }))),
      (K = a(i, (e) => null)),
      (q = h(i, (e, { get: t }) => k(j(t, e)))),
      (J = h(i, (e, { get: t }) => {
        let n = t(V, e);
        return n.data != null || n.isError;
      })),
      (Y = h(i, ({ domain: e, hostId: t, projectRoot: n }, { get: r }) => {
        let i = r(V, { domain: e, hostId: t, projectRoot: n }).data?.file;
        return F(i?.currentSuggestionIds ?? [], i?.suggestions ?? []);
      })));
  }))();
}
var Z;
function Q() {
  return (Q = e(() => {
    (b(), (Z = g(`electron:new-chat-suggestion-source-debug-override`, null)));
  }))();
}
export {
  W as a,
  H as c,
  q as d,
  D as f,
  U as i,
  G as l,
  Y as m,
  Z as n,
  V as o,
  E as p,
  K as r,
  J as s,
  Q as t,
  X as u,
};
//# sourceMappingURL=new-chat-suggestion-source-debug-state-e12fb7569485.js.map
