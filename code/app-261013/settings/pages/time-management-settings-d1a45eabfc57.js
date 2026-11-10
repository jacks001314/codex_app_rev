import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _xt as t, oxt as n, vzt as r, wxt as i, xMt as a } from "./app-shared-bbfeca5e5737.js";
function o() {
  let e = (0, s.c)(16),
    t = i(),
    r,
    a,
    o,
    l,
    u;
  if (e[0] !== t.search || e[1] !== t.state) {
    let i = new URLSearchParams(t.search);
    (i.get(`view`) !== `quiet-hours` && i.get(`view`) !== `study-hours` && i.set(`view`, `time-management`),
      (r = n),
      (l = !0),
      (u = t.state),
      (o = `/settings/safety`),
      (a = i.toString()),
      (e[0] = t.search),
      (e[1] = t.state),
      (e[2] = r),
      (e[3] = a),
      (e[4] = o),
      (e[5] = l),
      (e[6] = u));
  } else ((r = e[2]), (a = e[3]), (o = e[4]), (l = e[5]), (u = e[6]));
  let d = `?${a}`,
    f;
  e[7] !== t.hash || e[8] !== o || e[9] !== d
    ? ((f = { pathname: o, search: d, hash: t.hash }), (e[7] = t.hash), (e[8] = o), (e[9] = d), (e[10] = f))
    : (f = e[10]);
  let p;
  return (
    e[11] !== r || e[12] !== l || e[13] !== u || e[14] !== f
      ? ((p = (0, c.jsx)(r, { replace: l, state: u, to: f })),
        (e[11] = r),
        (e[12] = l),
        (e[13] = u),
        (e[14] = f),
        (e[15] = p))
      : (p = e[15]),
    p
  );
}
var s, c;
function l() {
  return (l = e(() => {
    ((s = r()), t(), (c = a()));
  }))();
}
l();
export { o as ChatGptTimeManagementSettings };
//# sourceMappingURL=time-management-settings-d1a45eabfc57.js.map
