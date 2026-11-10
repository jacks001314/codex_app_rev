import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, _xt as r, vzt as i, wxt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as s,
  bst as c,
  dxn as l,
  gwr as u,
  lxn as d,
  skt as f,
  uxn as p,
  xst as m,
} from "./app-initial-5851df3f6cb1.js";
import { n as h, t as g } from "./profile-88f7f966d875.js";
import { l as _, u as v } from "./username-validation-c1e2f125c179.js";
import { n as y, r as b } from "./profile-page-229d53af14a7.js";
function x(e) {
  let n = (0, C.c)(14),
    { username: r, tabId: i } = e,
    o = t(u),
    s = a(),
    l;
  n[0] !== s || n[1] !== i || n[2] !== r
    ? ((l = _({ ...s, key: i, state: null }, r)), (n[0] = s), (n[1] = i), (n[2] = r), (n[3] = l))
    : (l = n[3]);
  let m;
  n[4] !== o || n[5] !== i
    ? ((m = (e) => {
        if (e == null) return;
        let t = p(o, i);
        t != null && d(t).updateTab(o, i, { props: { username: e }, title: `@${f(e).localUsername}` });
      }),
      (n[4] = o),
      (n[5] = i),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] !== l || n[8] !== m || n[9] !== r
    ? ((h = (0, w.jsx)(g, {
        Layout: S,
        username: r,
        isProfileV2Enabled: !0,
        rightAlignHeaderControls: !0,
        redirectToUsername: !1,
        presentation: `tab`,
        visit: l,
        onUsernameChanged: m,
      })),
      (n[7] = l),
      (n[8] = m),
      (n[9] = r),
      (n[10] = h))
    : (h = n[10]);
  let v;
  return (
    n[11] !== h || n[12] !== r
      ? ((v = (0, w.jsx)(c, { version: `v2`, username: r, children: h })),
        (n[11] = h),
        (n[12] = r),
        (n[13] = v))
      : (v = n[13]),
    v
  );
}
function S(e) {
  let t = (0, C.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = (0, w.jsx)(y, { ...e, isTab: !0 })), (t[0] = e), (t[1] = n)), n);
}
var C, w;
function T() {
  return (T = e(() => {
    ((C = i()), n(), r(), s(), v(), h(), l(), b(), m(), (w = o()));
  }))();
}
T();
export { x as ProfileTabContent };
//# sourceMappingURL=tab-content-da3f35e12955.js.map
