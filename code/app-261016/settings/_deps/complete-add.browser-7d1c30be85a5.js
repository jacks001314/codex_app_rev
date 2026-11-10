import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $Rt as t, HFt as n, NLt as r, VRt as i, dat as a, gRt as o } from "./app-shared-2feb3d4c6fcc.js";
import { czr as s, gzr as c, nzr as l } from "./app-initial-ad16eaadf81f.js";
import { n as u, t as d } from "./recommendation-status-23fd960f6a26.js";
function f(e) {
  try {
    let t = (0, p.getCookie)(`oai-client-auth-info`);
    if (typeof t != `string`) return;
    let n = m.parse(JSON.parse(t));
    if (n.isOptedOut || n.user == null || n.user.email === e) return;
    (0, p.setCookie)(
      `oai-client-auth-info`,
      JSON.stringify({ ...n, user: { ...n.user, phoneNumber: void 0, email: e, timestamp: Date.now() } }),
      { path: `/`, sameSite: `lax`, maxAge: 2592e3 },
    );
  } catch {}
}
var p, m;
function h() {
  return (h = e(() => {
    ((p = a()),
      n(),
      (m = o({ isOptedOut: r(), user: t([o({ email: i() }), o({ phoneNumber: i() })]).optional() })));
  }))();
}
async function g({ accountId: e, email: t, queryClient: n, userId: r }) {
  if (r == null || e == null) return !1;
  let i = await s();
  if (i?.userId !== r || i.accountId !== e) return !1;
  let a = await c({
    accessToken: i.accessToken,
    method: `POST`,
    path: `/accounts/add_email/verify`,
    reason: `verify_otp`,
  });
  if (a?.userId !== r || a.accountId !== e) return !1;
  await Promise.all([
    n.invalidateQueries({ queryKey: [`chatgpt-current-user`] }),
    n.invalidateQueries({ queryKey: [`browser-chatgpt-auth`] }),
    n.invalidateQueries({ queryKey: [`change-email-eligibility`, r, e] }),
  ]);
  let o = await s();
  return o?.userId !== r || o.accountId !== e
    ? !1
    : (f(t), await n.invalidateQueries({ queryKey: u(e, r).queryKey }).catch(() => {}), !0);
}
function _() {
  return (_ = e(() => {
    (l(), d(), h());
  }))();
}
export { f as i, _ as n, h as r, g as t };
//# sourceMappingURL=complete-add.browser-7d1c30be85a5.js.map
