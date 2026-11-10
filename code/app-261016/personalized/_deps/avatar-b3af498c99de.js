import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, nCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { eEt as a, imr as o, rmr as s, tEt as c } from "./app-initial-ad16eaadf81f.js";
import { n as l, t as u } from "./profile-avatar-bc7371feb0c0.js";
import { r as d, t as f } from "./state-d01a5a96b9cf.js";
function p(e) {
  let t = (0, m.c)(18),
    {
      accountUserId: n,
      avatarUrl: r,
      fadeIn: a,
      loading: s,
      loadingFallback: l,
      muted: f,
      name: p,
      profileQueryEnabled: g,
      size: _,
    } = e,
    v = g === void 0 || g,
    y = _ === void 0 ? `sm` : _,
    { accountId: b, userId: x } = o(),
    S;
  t[0] !== n || t[1] !== x
    ? ((S = x != null && n?.split(`__`)[0] === x.split(`__`)[0]), (t[0] = n), (t[1] = x), (t[2] = S))
    : (S = t[2]);
  let C = S,
    w = C && b != null,
    T;
  t[3] !== b || t[4] !== w || t[5] !== x
    ? ((T = { accountId: b, enabled: w, userId: x }), (t[3] = b), (t[4] = w), (t[5] = x), (t[6] = T))
    : (T = t[6]);
  let { data: E, isLoading: D } = c(T),
    O = C ? E?.imageUrl : null,
    k;
  t[7] === v ? (k = t[8]) : ((k = { enabled: v }), (t[7] = v), (t[8] = k));
  let A = i(d, O == null && r == null ? n : null, k),
    j = O ?? r ?? A,
    M = n ?? void 0,
    N = s || (C && D && r == null),
    P;
  return (
    t[9] !== a ||
    t[10] !== l ||
    t[11] !== f ||
    t[12] !== p ||
    t[13] !== y ||
    t[14] !== j ||
    t[15] !== M ||
    t[16] !== N
      ? ((P = (0, h.jsx)(u, {
          avatarUrl: j,
          colorKey: M,
          fadeIn: a,
          loading: N,
          loadingFallback: l,
          muted: f,
          name: p,
          size: y,
        })),
        (t[9] = a),
        (t[10] = l),
        (t[11] = f),
        (t[12] = p),
        (t[13] = y),
        (t[14] = j),
        (t[15] = M),
        (t[16] = N),
        (t[17] = P))
      : (P = t[17]),
    P
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = n()), r(), s(), l(), a(), f(), (h = t()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=avatar-b3af498c99de.js.map
