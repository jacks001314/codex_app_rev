import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  Gyt as n,
  IXt as r,
  KXt as i,
  S3t as a,
  TJt as o,
  Uyt as s,
  dbt as c,
  g5t as l,
  hmn as u,
  iR as d,
  kmn as f,
  r5t as p,
  rR as m,
  s3t as h,
  ubt as g,
  wJt as _,
  zXt as v,
} from "./app-initial-f094ef01c64d.js";
import { Ja as y, Ya as b } from "./app-primary-4c40d73a1074.js";
function x(e) {
  let t = (0, S.c)(22),
    r = i(),
    { accountId: o, userId: s, isLoading: u } = c(),
    { isLoading: d } = n(),
    f = o != null && s != null,
    h;
  t[0] === r.search
    ? (h = t[1])
    : ((h = new URLSearchParams(r.search).get(`connector`)?.trim() ?? ``),
      (t[0] = r.search),
      (t[1] = h));
  let g = h,
    b;
  t[2] !== o || t[3] !== g || t[4] !== s
    ? ((b = [`connector-settings`, o, s, g]), (t[2] = o), (t[3] = g), (t[4] = s), (t[5] = b))
    : (b = t[5]);
  let x;
  t[6] === g ? (x = t[7]) : ((x = () => y(g)), (t[6] = g), (t[7] = x));
  let w = f && !!g,
    T;
  t[8] !== b || t[9] !== x || t[10] !== w
    ? ((T = { queryKey: b, queryFn: x, enabled: w, staleTime: _.FIVE_MINUTES }),
      (t[8] = b),
      (t[9] = x),
      (t[10] = w),
      (t[11] = T))
    : (T = t[11]);
  let { data: E, isPending: D } = a(T);
  if (!g) {
    let e;
    return (
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, C.jsx)(v, { to: `/settings/plugins-settings`, replace: !0 })), (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (u || d || (f && D)) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, C.jsx)(m, { fillParent: !0, debugName: `ConnectorSettingsRedirect` })),
          (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  if (!f || E == null) {
    let e;
    return (
      t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, C.jsx)(v, { to: `/settings/plugins-settings`, replace: !0 })), (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let O;
  t[15] === E.pluginId
    ? (O = t[16])
    : ((O = l({ pluginId: E.pluginId, pluginName: E.pluginId, remoteMarketplaceName: p })),
      (t[15] = E.pluginId),
      (t[16] = O));
  let k;
  t[17] === E.displayName
    ? (k = t[18])
    : ((k = { pluginDisplayName: E.displayName, pluginDetailDeepLinkMode: `view` }),
      (t[17] = E.displayName),
      (t[18] = k));
  let A;
  return (
    t[19] !== O || t[20] !== k
      ? ((A = (0, C.jsx)(v, { to: O, replace: !0, state: k })),
        (t[19] = O),
        (t[20] = k),
        (t[21] = A))
      : (A = t[21]),
    A
  );
}
var S, C;
e(() => {
  ((S = f()), h(), t(), r(), g(), s(), d(), o(), b(), (C = u()));
})();
export { x as ConnectorSettingsRedirect };
//# sourceMappingURL=connector-settings-redirect-2fa39171de65.js.map
