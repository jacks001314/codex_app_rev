import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Jbt as r,
  Pxt as i,
  jDt as a,
  oSt as o,
  rst as s,
  vzt as c,
  wot as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Opr as d,
  Upr as f,
  Ymr as p,
  ehr as m,
  fbn as h,
  pbn as g,
  qpr as _,
  wpr as v,
} from "./app-initial-5851df3f6cb1.js";
var y;
function b() {
  return (b = e(() => {
    (i(),
      s(),
      l(),
      h(),
      d(),
      f(),
      (y = o(t, ({ get: e }) => {
        let t = e(_);
        if (t == null) return null;
        let { data: n } = e(v, r(t)),
          i = n?.display_name.trim();
        return i && !g(i) ? i : null;
      })));
  }))();
}
function x(e, t) {
  return [`user-rules`, e, t];
}
function S(e, t, n = null, r = null) {
  return {
    queryKey: [...x(e, t), n, r],
    placeholderData: (n, r) => (r?.queryKey[1] === e && r.queryKey[2] === t ? n : void 0),
    queryFn: ({ signal: n }) =>
      p.safeGet(`/wham/user-rules`, {
        additionalHeaders: { "ChatGPT-Account-ID": e, "x-openai-use-sheep": `1` },
        expectedIdentity: { accountId: e, userId: t },
        expectedErrorStatuses: [403, 404],
        signal: n,
        retry: !1,
      }),
    staleTime: 0,
    gcTime: 0,
    retry: !1,
    refetchOnWindowFocus: !0,
    refetchOnReconnect: !0,
  };
}
function C() {
  return (C = e(() => {
    m();
  }))();
}
function w() {
  let e = (0, T.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, E.jsx)(n, {
          id: `settings.userRules.title`,
          defaultMessage: `Custom rules`,
          description: `Title for account-wide custom action rules`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = c()), a(), (E = u()));
  }))();
}
export { b as a, S as i, D as n, y as o, C as r, w as t };
//# sourceMappingURL=title-3bd755049885.js.map
