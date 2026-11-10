import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, Jrt as n, LLt as r, TLt as i, _It as a, eLt as o } from "./app-shared-bbfeca5e5737.js";
import { INr as s, TNr as c, kNr as l } from "./app-initial-5851df3f6cb1.js";
import { n as u, t as d } from "./recommendation-status-aa79be77981b.js";
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
    ((p = n()),
      t(),
      (m = o({ isOptedOut: a(), user: r([o({ email: i() }), o({ phoneNumber: i() })]).optional() })));
  }))();
}
async function g({ accountId: e, email: t, queryClient: n, userId: r }) {
  if (r == null || e == null) return !1;
  let i = await l();
  if (i?.userId !== r || i.accountId !== e) return !1;
  let a = await s({
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
  let o = await l();
  return o?.userId !== r || o.accountId !== e
    ? !1
    : (f(t), await n.invalidateQueries({ queryKey: u(e, r).queryKey }).catch(() => {}), !0);
}
function _() {
  return (_ = e(() => {
    (c(), d(), h());
  }))();
}
export { f as i, _ as n, h as r, g as t };
//# sourceMappingURL=complete-add.browser-7fce96e2170f.js.map
