import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AJt as t,
  C5t as n,
  F5t as r,
  JU as i,
  O5t as a,
  PAt as o,
  RJt as s,
  Sft as c,
  Tft as l,
  _dn as u,
  _jt as d,
  d5t as f,
  gjt as p,
  jAt as m,
  jJt as h,
  l6t as g,
  mcn as _,
  n5t as v,
  qU as y,
  v5t as b,
  x6t as x,
} from "./app-shared-7552fc8d5d82.js";
import { n as S, t as C } from "./plugin-detail-view-9adcbb756c22.js";
function w() {
  let e = (0, T.c)(18),
    { shareKey: t } = n(),
    { search: i } = b(),
    a = r(c),
    o;
  e[0] === t
    ? (o = e[1])
    : ((o =
        t != null && /^[a-z0-9]+(?:-[a-z0-9]+)*@(?:openai-bundled|openai-primary-runtime)$/.test(t)
          ? t
          : null),
      (e[0] = t),
      (e[1] = o));
  let s = o,
    l;
  e[2] !== a || e[3] !== t
    ? ((l = [`plugins`, `share-link`, a, t]), (e[2] = a), (e[3] = t), (e[4] = l))
    : (l = e[4]);
  let u = a != null && t != null && s == null,
    d;
  e[5] === t
    ? (d = e[6])
    : ((d = (e) => {
        let { signal: n } = e;
        if (t == null) throw Error(`Plugin share link requires a share key`);
        return m.safeGet(`/ps/plugin-shares/{share_key}`, {
          surface: `plugin_details`,
          parameters: { path: { share_key: t } },
          additionalHeaders: y(`chatgpt`),
          expectedErrorStatuses: [403, 404],
          signal: n,
        });
      }),
      (e[5] = t),
      (e[6] = d));
  let f;
  e[7] !== l || e[8] !== u || e[9] !== d
    ? ((f = { queryKey: l, enabled: u, queryFn: d, retry: !1, staleTime: p.FIVE_MINUTES }),
      (e[7] = l),
      (e[8] = u),
      (e[9] = d),
      (e[10] = f))
    : (f = e[10]);
  let { data: _, isPending: S, isError: w } = h(f);
  if (s == null && S) {
    let t;
    return (
      e[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, E.jsx)(C, { state: `loading` })), (e[11] = t))
        : (t = e[11]),
      t
    );
  }
  let D = s ?? _?.plugin_id;
  if (w || D == null || !x(D)) {
    let t;
    return (
      e[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, E.jsx)(C, { state: `missing` })), (e[12] = t))
        : (t = e[12]),
      t
    );
  }
  let O;
  e[13] === D ? (O = e[14]) : ((O = g({ pluginId: D })), (e[13] = D), (e[14] = O));
  let k;
  return (
    e[15] !== i || e[16] !== O
      ? ((k = (0, E.jsx)(v, { replace: !0, to: { pathname: O, search: i } })),
        (e[15] = i),
        (e[16] = O),
        (e[17] = k))
      : (k = e[17]),
    k
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = u()), t(), a(), s(), f(), l(), d(), o(), S(), i(), (E = _()));
  }))();
}
D();
export { w as BrowserPluginSharePage };
//# sourceMappingURL=browser-plugin-share-page-3cda7677a121.js.map
