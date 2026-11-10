import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $St as t, LNt as n, NSt as r, PBt as i, VSt as a, ZSt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  MOr as s,
  Mct as c,
  Nct as l,
  Swn as u,
  WTt as d,
  bwn as f,
  xwn as p,
  zOr as m,
} from "./app-initial-ad16eaadf81f.js";
import { n as h, t as g } from "./profile-d06bbc2f13b9.js";
import { l as _, u as v } from "./username-validation-1b83916da7fe.js";
import { n as y, r as b } from "./profile-page-28225307818b.js";
function x(e) {
  let n = (0, C.c)(14),
    { username: r, tabId: i } = e,
    o = t(s),
    l = a(),
    u;
  n[0] !== l || n[1] !== i || n[2] !== r
    ? ((u = _({ ...l, key: i, state: null }, r)), (n[0] = l), (n[1] = i), (n[2] = r), (n[3] = u))
    : (u = n[3]);
  let m;
  n[4] !== o || n[5] !== i
    ? ((m = (e) => {
        if (e == null) return;
        let t = p(o, i);
        t != null && f(t).updateTab(o, i, { props: { username: e }, title: `@${d(e).localUsername}` });
      }),
      (n[4] = o),
      (n[5] = i),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] !== u || n[8] !== m || n[9] !== r
    ? ((h = (0, w.jsx)(g, {
        Layout: S,
        username: r,
        isProfileV2Enabled: !0,
        rightAlignHeaderControls: !0,
        redirectToUsername: !1,
        presentation: `tab`,
        visit: u,
        onUsernameChanged: m,
      })),
      (n[7] = u),
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
    ((C = i()), o(), r(), m(), v(), h(), u(), b(), l(), (w = n()));
  }))();
}
T();
export { x as ProfileTabContent };
//# sourceMappingURL=tab-content-63265fb8ce20.js.map
