import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  Qot as n,
  RLt as r,
  TLt as i,
  Zot as a,
  pIt as o,
  pLt as s,
  vzt as c,
  xLt as l,
  xMt as u,
  yzt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  No as ee,
  Po as f,
  _Gn as p,
  dnn as te,
  fnn as ne,
  unn as m,
  vGn as re,
} from "./app-initial-5851df3f6cb1.js";
import { m as ie, t as h } from "./runtime-2beb8c8770e0.js";
import { d as g, g as _, h as v, m as y, u as b } from "./media-9efb3483c322.js";
import { i as x, n as S, r as C, t as w } from "./tooltip-ce76a437c28b.js";
function T(e) {
  if (e?.requiredComponents !== void 0) return [...new Set(e.requiredComponents)].sort();
  let t = O.safeParse(e?.appData);
  return [
    ...new Set([
      ...Object.entries(t.success ? (t.data.opGenui?.componentResults ?? {}) : {})
        .map(([e, t]) => E(e, t))
        .filter((e) => e !== void 0),
      ...Object.keys(g).filter((t) => e?.code.includes(`__dil.jsx(${t},`) === !0),
    ]),
  ].sort();
}
function E(e, t) {
  let n = k.safeParse(t);
  if (n.success) return D.test(n.data.componentName) ? n.data.componentName : void 0;
  try {
    let t = o(r()).safeParse(JSON.parse(e)),
      n = t.success ? t.data[0] : void 0;
    return typeof n == `string` && D.test(n) ? n : void 0;
  } catch {
    return;
  }
}
var D, O, k;
function A() {
  return (A = e(() => {
    (b(),
      t(),
      (D = /^(?!DIL$|GenUI$)[A-Z][A-Za-z0-9_$]*$/),
      (O = s({ opGenui: s({ componentResults: l(i(), r()).optional() }).optional() })),
      (k = s({ componentName: i() })));
  }))();
}
function j(e) {
  let t = (0, I.c)(34),
    {
      payload: a,
      dilComponents: o,
      interactive: s,
      initialViewState: c,
      fallback: u,
      mediaComponents: d,
      clientDefinedWidget: f,
      globals: p,
      supportedClientActions: m,
    } = e,
    h = s !== void 0 && s,
    g = p === void 0 ? z : p,
    _;
  t[0] === u ? (_ = t[1]) : ((_ = u ?? (0, R.jsx)(ee, {})), (t[0] = u), (t[1] = _));
  let v = _,
    b;
  t[2] === c
    ? (b = t[3])
    : ((b = () => {
        let e = new Map();
        return (
          c !== void 0 && e.set(ie, JSON.stringify(c)),
          {
            getItem: (t) => e.get(t) ?? null,
            setItem: (t, n) => {
              e.set(t, n);
            },
          }
        );
      }),
      (t[2] = c),
      (t[3] = b));
  let [x] = (0, L.useState)(b),
    S = ne(te()),
    E = re(a),
    D = T(E),
    O = o === void 0 ? D.filter(P) : [],
    k = n({ queries: O.map(N) });
  if (!E || E.programFailure || E.appData?.__FILTERED_REASON__ === `SIZE_EXCEEDED`) return v;
  if (k.some(M)) return null;
  let A = Object.fromEntries(
    Object.entries(o ?? y).filter((e) => {
      let [t] = e;
      return (
        o != null || E.requiredComponents == null || t === `OpGenuiResolvedComponentBoundary` || D.includes(t)
      );
    }),
  );
  for (let e of D)
    if (!Object.hasOwn(A, e)) {
      let t = k[O.indexOf(e)]?.data;
      if (h && t === void 0) return v;
      A[e] = t ?? `() => null`;
    }
  let j = !h,
    F = C,
    V = E.appData,
    H = l(i(), r()).catch({}).parse(E.appData?.opGenui),
    U;
  t[4] !== h || t[5] !== m ? ((U = h ? (m ?? []) : []), (t[4] = h), (t[5] = m), (t[6] = U)) : (U = t[6]);
  let W;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = { ready: !1, publicReady: !1 }), (t[7] = W))
    : (W = t[7]);
  let G;
  t[8] !== H || t[9] !== U
    ? ((G = { ...H, supportedClientActions: U, nativeServerActions: W }), (t[8] = H), (t[9] = U), (t[10] = G))
    : (G = t[10]);
  let K;
  t[11] !== G || t[12] !== E.appData
    ? ((K = { ...V, opGenui: G }), (t[11] = G), (t[12] = E.appData), (t[13] = K))
    : (K = t[13]);
  let q;
  t[14] === f
    ? (q = t[15])
    : ((q = f == null ? {} : { __chatgptClientDefinedWidget: f }), (t[14] = f), (t[15] = q));
  let J;
  t[16] !== d || t[17] !== q
    ? ((J = { ...B, ...d, ...q }), (t[16] = d), (t[17] = q), (t[18] = J))
    : (J = t[18]);
  let Y = d === void 0,
    X = h ? x : void 0,
    Z = h ? g : z,
    Q;
  t[19] !== F ||
  t[20] !== A ||
  t[21] !== K ||
  t[22] !== J ||
  t[23] !== Y ||
  t[24] !== X ||
  t[25] !== Z ||
  t[26] !== S ||
  t[27] !== v ||
  t[28] !== E.code ||
  t[29] !== E.constants
    ? ((Q = (0, R.jsx)(F, {
        appData: K,
        components: J,
        constants: E.constants,
        dil: E.code,
        dilComponents: A,
        disableExternalMedia: Y,
        persistState: X,
        errorFallback: v,
        globals: Z,
        theme: S,
        tooltipComponent: w,
      })),
      (t[19] = F),
      (t[20] = A),
      (t[21] = K),
      (t[22] = J),
      (t[23] = Y),
      (t[24] = X),
      (t[25] = Z),
      (t[26] = S),
      (t[27] = v),
      (t[28] = E.code),
      (t[29] = E.constants),
      (t[30] = Q))
    : (Q = t[30]);
  let $;
  return (
    t[31] !== Q || t[32] !== j
      ? (($ = (0, R.jsx)(`div`, { inert: j, children: Q })), (t[31] = Q), (t[32] = j), (t[33] = $))
      : ($ = t[33]),
    $
  );
}
function M(e) {
  return e.isPending;
}
function N(e) {
  return {
    queryKey: [`dil-response-component`, e],
    queryFn: g[e],
    staleTime: 1 / 0,
    gcTime: 1 / 0,
    retry: !1,
  };
}
function P(e) {
  return Object.hasOwn(g, e);
}
function F({ fallback: e }) {
  return e;
}
var I, L, R, z, B;
function V() {
  return (V = e(() => {
    ((I = c()),
      x(),
      h(),
      _(),
      b(),
      a(),
      (L = d()),
      t(),
      m(),
      A(),
      f(),
      p(),
      S(),
      (R = u()),
      (z = { GenUI: {} }),
      (B = { ...v, image: F, "search-image": F }));
  }))();
}
export { A as i, V as n, T as r, j as t };
//# sourceMappingURL=response-preview-6bbe536de1b4.js.map
