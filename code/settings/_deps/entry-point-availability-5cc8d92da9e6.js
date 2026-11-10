import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  FKt as t,
  M6t as n,
  N6t as r,
  P6t as i,
  RKt as a,
  S3t as o,
  aYt as s,
  dYt as c,
  dbt as l,
  kmn as u,
  rq as d,
  s3t as f,
  ubt as p,
  uq as m,
} from "./app-initial-f094ef01c64d.js";
function h(e, t) {
  let n = t === void 0 ? g : `${g}?entry_point=${t}`;
  if (e === void 0) {
    i({ href: n, initiator: `open_in_browser_bridge` });
    return;
  }
  r({ event: e, href: n, initiator: `open_in_browser_bridge` });
}
var g,
  _ = e(() => {
    (n(), (g = `https://chatgpt.com/gifts/credits`));
  });
function v() {
  let e = (0, S.c)(2),
    t = b(),
    n = c(C);
  if (!t) return !1;
  let r;
  return (e[0] === n ? (r = e[1]) : ((r = n.get(w, !1)), (e[0] = n), (e[1] = r)), r);
}
function y(e) {
  let t = (0, S.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: r } = n,
    i = b(r === void 0 || r),
    a = c(C);
  if (i !== !0) return i;
  let o;
  t[2] === a ? (o = t[3]) : ((o = a.get(w, !1)), (t[2] = a), (t[3] = o));
  let s = o,
    l;
  return (t[4] === a ? (l = t[5]) : ((l = a.get(T, !1)), (t[4] = a), (t[5] = l)), s && l);
}
function b(e) {
  let t = (0, S.c)(6),
    n = e === void 0 || e,
    { authMethod: r, hasChatGptToken: i, isLoading: a } = l(),
    { data: s, isLoading: c } = m(),
    u = r === `chatgpt` && i === !0 && s != null,
    d = n && u,
    f = s?.id,
    p = s?.plan_type,
    h;
  t[0] !== f || t[1] !== p
    ? ((h = [`gift-credits`, `sender-eligibility`, f, p]), (t[0] = f), (t[1] = p), (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] !== d || t[4] !== h
    ? ((g = { enabled: d, queryFn: x, queryKey: h, retry: !1, staleTime: 6e4 }),
      (t[3] = d),
      (t[4] = h),
      (t[5] = g))
    : (g = t[5]);
  let { data: _, isLoading: v } = o(g);
  if (!n) return !1;
  if (!(a || c || v)) return u && _?.eligible === !0;
}
function x() {
  return t.safeGet(`/gift-credits/senders/eligibility`);
}
var S,
  C,
  w,
  T,
  E = e(() => {
    ((S = u()),
      f(),
      p(),
      d(),
      s(),
      a(),
      (C = `3116837080`),
      (w = `purchase_flow_enabled`),
      (T = `desktop_beacon_enabled`));
  });
export { h as a, _ as i, y as n, v as r, E as t };
//# sourceMappingURL=entry-point-availability-5cc8d92da9e6.js.map
