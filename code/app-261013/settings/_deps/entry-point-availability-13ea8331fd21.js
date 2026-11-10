import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Xot as t, Yot as n, vzt as r } from "./app-shared-bbfeca5e5737.js";
import {
  Fin as i,
  Hin as a,
  JPn as o,
  XPn as s,
  ZPn as c,
  eDr as l,
  fur as u,
  iPr as d,
  oDr as f,
  pur as p,
  sPr as m,
} from "./app-initial-5851df3f6cb1.js";
function h(e, t) {
  let n = t === void 0 ? g : `${g}?entry_point=${t}`;
  if (e === void 0) {
    c({ href: n, initiator: `open_in_browser_bridge` });
    return;
  }
  s({ event: e, href: n, initiator: `open_in_browser_bridge` });
}
var g;
function _() {
  return (_ = e(() => {
    (o(), (g = `https://chatgpt.com/gifts/credits`));
  }))();
}
function v() {
  let e = (0, S.c)(2),
    t = b(),
    n = f(C);
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
    a = f(C);
  if (i !== !0) return i;
  let o;
  t[2] === a ? (o = t[3]) : ((o = a.get(w, !1)), (t[2] = a), (t[3] = o));
  let s = o,
    c;
  return (t[4] === a ? (c = t[5]) : ((c = a.get(T, !1)), (t[4] = a), (t[5] = c)), s && c);
}
function b(e) {
  let n = (0, S.c)(6),
    r = e === void 0 || e,
    { authMethod: i, hasChatGptToken: o, isLoading: s } = p(),
    { data: c, isLoading: l } = a(),
    u = i === `chatgpt` && o === !0 && c != null,
    d = r && u,
    f = c?.id,
    m = c?.plan_type,
    h;
  n[0] !== f || n[1] !== m
    ? ((h = [`gift-credits`, `sender-eligibility`, f, m]), (n[0] = f), (n[1] = m), (n[2] = h))
    : (h = n[2]);
  let g;
  n[3] !== d || n[4] !== h
    ? ((g = { enabled: d, queryFn: x, queryKey: h, retry: !1, staleTime: 6e4 }),
      (n[3] = d),
      (n[4] = h),
      (n[5] = g))
    : (g = n[5]);
  let { data: _, isLoading: v } = t(g);
  if (!r) return !1;
  if (!(s || l || v)) return u && _?.eligible === !0;
}
function x() {
  return d.safeGet(`/gift-credits/senders/eligibility`);
}
var S, C, w, T;
function E() {
  return (E = e(() => {
    ((S = r()),
      n(),
      u(),
      i(),
      l(),
      m(),
      (C = `3116837080`),
      (w = `purchase_flow_enabled`),
      (T = `desktop_beacon_enabled`));
  }))();
}
export { h as a, _ as i, y as n, v as r, E as t };
//# sourceMappingURL=entry-point-availability-13ea8331fd21.js.map
