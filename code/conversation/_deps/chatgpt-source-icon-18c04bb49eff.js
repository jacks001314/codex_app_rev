import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Kct as t,
  QU as n,
  Xdt as r,
  ZU as i,
  bj as a,
  ds as o,
  fk as s,
  hmn as c,
  kmn as l,
  pk as u,
  rlt as d,
  us as f,
  xj as p,
} from "./app-initial-f094ef01c64d.js";
function m(e) {
  let n = (0, g.c)(8),
    { source: r, shouldBlockExternalEgress: a } = e;
  switch (r.kind) {
    case `memory`: {
      let e;
      return (
        n[0] === r.conversationContextType
          ? (e = n[1])
          : ((e =
              r.conversationContextType === `past_conversation`
                ? (0, _.jsx)(d, {})
                : (0, _.jsx)(t, {})),
            (n[0] = r.conversationContextType),
            (n[1] = e)),
        e
      );
    }
    case `plugin`: {
      let e;
      return (
        n[2] !== a || n[3] !== r
          ? ((e = (0, _.jsx)(h, { shouldBlockExternalEgress: a, source: r })),
            (n[2] = a),
            (n[3] = r),
            (n[4] = e))
          : (e = n[4]),
        e
      );
    }
    case `web`: {
      let e = !a,
        t;
      return (
        n[5] !== r.url || n[6] !== e
          ? ((t = (0, _.jsx)(i, {
              className: `icon-sm shrink-0 overflow-hidden rounded-[22%]`,
              href: r.url,
              loadRemote: e,
            })),
            (n[5] = r.url),
            (n[6] = e),
            (n[7] = t))
          : (t = n[7]),
        t
      );
    }
  }
}
function h(e) {
  let t = (0, g.c)(14),
    { shouldBlockExternalEgress: n, source: r } = e,
    i;
  t[0] === r.connectorId
    ? (i = t[1])
    : ((i = r.connectorId == null ? [] : [r.connectorId]), (t[0] = r.connectorId), (t[1] = i));
  let c = !n,
    l;
  t[2] !== i || t[3] !== c
    ? ((l = { appIds: i, enabled: c }), (t[2] = i), (t[3] = c), (t[4] = l))
    : (l = t[4]);
  let { data: u } = o(l),
    d;
  t[5] !== u || t[6] !== r.connectorId
    ? ((d = u?.find((e) => e.id === r.connectorId)), (t[5] = u), (t[6] = r.connectorId), (t[7] = d))
    : (d = t[7]);
  let f = d,
    p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, _.jsx)(a, {})), (t[8] = p))
    : (p = t[8]);
  let m = f?.name ?? r.label,
    h = !n,
    v = f?.iconUrlDark,
    y = f?.iconUrl ?? r.logoUrl,
    b;
  return (
    t[9] !== m || t[10] !== h || t[11] !== v || t[12] !== y
      ? ((b = (0, _.jsx)(s, {
          alt: ``,
          className: `icon-sm shrink-0 object-contain`,
          fallback: p,
          knownAppId: m,
          loadRemote: h,
          logoDarkUrl: v,
          logoUrl: y,
        })),
        (t[9] = m),
        (t[10] = h),
        (t[11] = v),
        (t[12] = y),
        (t[13] = b))
      : (b = t[13]),
    b
  );
}
var g,
  _,
  v = e(() => {
    ((g = l()), u(), n(), r(), p(), f(), (_ = c()));
  });
export { v as n, m as t };
//# sourceMappingURL=chatgpt-source-icon-18c04bb49eff.js.map
